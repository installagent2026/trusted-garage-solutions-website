// One-off image compressor for /public/images.
// Resizes to max 1920px wide, re-encodes JPEG/WebP, converts hero PNGs to WebP.
// Run: node scripts/compress-images.mjs

import sharp from "sharp";
import { readdir, stat, unlink, rename } from "node:fs/promises";
import { join, parse, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = join(__dirname, "..", "public", "images");
const MAX_WIDTH = 1920;

const JPEG_OPTS = { quality: 82, mozjpeg: true };
const WEBP_OPTS = { quality: 80, effort: 6 };

// Hero PNGs to convert to WebP (better LCP)
const PNG_TO_WEBP = new Set(["tgs_hero_image.png", "tgs_hero_image2.png"]);

// Orphaned files (not referenced in code) to delete
const ORPHANS = ["broken_spring.jpeg", "garage_off_track.png", "garage_off_track2.png"];

// Tiny files to skip (review images, already small)
const SKIP = new Set(["review-bryce.png", "review-mario.png", "review-tim.png"]);

function fmtKB(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`;
}

function fmtMB(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

async function processFile(file) {
  const path = join(IMAGES_DIR, file);
  const before = (await stat(path)).size;

  if (SKIP.has(file)) {
    console.log(`  skip   ${file.padEnd(38)} ${fmtKB(before).padStart(9)} (small)`);
    return;
  }

  if (ORPHANS.includes(file)) {
    await unlink(path);
    console.log(`  delete ${file.padEnd(38)} ${fmtMB(before).padStart(9)} (orphaned)`);
    return;
  }

  const { ext } = parse(file);
  const lower = ext.toLowerCase();

  // Read into memory first so we can overwrite the source
  const input = await sharp(path).rotate(); // auto-rotate based on EXIF
  const meta = await input.metadata();
  const resizeOpts = meta.width && meta.width > MAX_WIDTH
    ? { width: MAX_WIDTH, withoutEnlargement: true }
    : undefined;

  let pipeline = sharp(path).rotate();
  if (resizeOpts) pipeline = pipeline.resize(resizeOpts);

  let outPath = path;
  let action = "compress";

  if (PNG_TO_WEBP.has(file)) {
    pipeline = pipeline.webp(WEBP_OPTS);
    outPath = join(IMAGES_DIR, file.replace(/\.png$/i, ".webp"));
    action = "PNG→WebP";
  } else if (lower === ".webp") {
    pipeline = pipeline.webp(WEBP_OPTS);
  } else if (lower === ".jpeg" || lower === ".jpg") {
    pipeline = pipeline.jpeg(JPEG_OPTS);
  } else if (lower === ".png") {
    // Optimize palette/zlib for any remaining PNGs
    pipeline = pipeline.png({ compressionLevel: 9, palette: true });
  } else {
    console.log(`  skip   ${file} (unsupported extension)`);
    return;
  }

  const buffer = await pipeline.toBuffer();

  // Write the output (using a temp name to avoid in-place read-while-write)
  const tempOut = outPath + ".tmp";
  await sharp(buffer).toFile(tempOut);
  await rename(tempOut, outPath);

  // If we converted PNG→WebP, delete the original PNG
  if (PNG_TO_WEBP.has(file) && outPath !== path) {
    await unlink(path);
  }

  const after = (await stat(outPath)).size;
  const pct = ((1 - after / before) * 100).toFixed(0);
  const dimsBefore = `${meta.width}×${meta.height}`;
  const dimsAfter = resizeOpts ? `${MAX_WIDTH}×?` : dimsBefore;
  console.log(
    `  ${action.padEnd(9)}${file.padEnd(34)} ${fmtMB(before).padStart(9)} → ${fmtMB(after).padStart(9)}  (-${pct}%, ${dimsBefore} → ${dimsAfter})`
  );
}

async function main() {
  const files = (await readdir(IMAGES_DIR)).sort();
  console.log(`Compressing ${files.length} files in /public/images/...\n`);
  for (const file of files) {
    try {
      await processFile(file);
    } catch (e) {
      console.error(`  ERROR  ${file}: ${e.message}`);
    }
  }
  console.log("\nDone.");
}

main();
