import { ImageResponse } from "next/og";

export const alt =
  "Trusted Garage Solutions — Nashville's trusted partner for residential garage door repair and installation. Call (615) 568-8072.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 16,
              height: 64,
              background: "#ffb81c",
              borderRadius: 4,
            }}
          />
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#ffb81c",
            }}
          >
            Trusted Garage Solutions
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 900,
              lineHeight: 1.05,
              color: "#ffffff",
            }}
          >
            Nashville&apos;s Garage Door Experts
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 500,
              color: "#d4d4d4",
              lineHeight: 1.3,
              maxWidth: 980,
            }}
          >
            Broken springs, off-track doors, opener replacement, and new installs
            — fast response, honest pricing.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 28,
            borderTop: "2px solid rgba(255, 184, 28, 0.4)",
          }}
        >
          <div style={{ fontSize: 30, fontWeight: 700, color: "#ffb81c" }}>
            (615) 568-8072
          </div>
          <div style={{ fontSize: 24, color: "#a3a3a3" }}>
            trustedgaragesolutions.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
