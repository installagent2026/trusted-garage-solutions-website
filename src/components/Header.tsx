import Link from "next/link";
import Image from "next/image";
import { PHONE, PHONE_HREF } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex-shrink-0 cursor-pointer focus-ring rounded-lg">
              <Image
                src="/logos/main-logo-white.png"
                alt="Trusted Garage Solutions"
                width={200}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold tracking-wide uppercase text-white hover:text-accent cursor-pointer focus-ring rounded px-1 py-0.5"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={PHONE_HREF}
                className="gold-button font-bold px-6 py-2.5 rounded-lg text-sm cursor-pointer focus-ring min-h-[44px] inline-flex items-center"
              >
                {PHONE}
              </a>
            </nav>

            <div className="md:hidden flex items-center gap-2">
              <a
                href={PHONE_HREF}
                className="gold-button font-bold px-3 py-2 rounded-lg text-xs cursor-pointer focus-ring min-h-[44px] inline-flex items-center"
              >
                Call Now
              </a>
              <label
                htmlFor="mobile-nav-toggle"
                className="w-11 h-11 flex flex-col items-center justify-center gap-1.5 cursor-pointer focus-ring rounded-lg min-w-[44px] min-h-[44px]"
                aria-label="Open menu"
              >
                <span className="block w-6 h-0.5 bg-white" />
                <span className="block w-6 h-0.5 bg-white" />
                <span className="block w-6 h-0.5 bg-white" />
              </label>
            </div>
          </div>
        </div>
      </header>

      {/* CSS-only mobile menu — no JavaScript, no hydration flash */}
      <input type="checkbox" id="mobile-nav-toggle" className="peer sr-only" />
      <div className="fixed inset-0 z-40 bg-charcoal/95 hidden peer-checked:flex flex-col items-center justify-center md:hidden">
        <nav className="flex flex-col items-center gap-8" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-serif font-semibold uppercase tracking-wider text-white hover:text-accent cursor-pointer focus-ring rounded px-2"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PHONE_HREF}
            className="mt-4 gold-button font-bold px-8 py-4 rounded-lg text-xl cursor-pointer focus-ring min-h-[44px] inline-flex items-center"
          >
            {PHONE}
          </a>
        </nav>
      </div>
    </>
  );
}
