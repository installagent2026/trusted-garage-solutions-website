import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import GarageDoorLoader from "@/components/GarageDoorLoader";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "optional",
  adjustFontFallback: true,
  preload: true,
  variable: "--font-jost",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trustedgaragesolutions.com"),
  title: {
    default: "Trusted Garage Solutions | Garage Door Repair & Installation Nashville TN",
    template: "%s | Trusted Garage Solutions",
  },
  description:
    "Nashville's trusted garage door repair and installation company. Fast response for broken springs, off-track doors, opener replacement, and new installations. Call (615) 568-8072.",
  keywords: [
    "garage door repair Nashville TN",
    "garage door installation Nashville",
    "broken garage door spring Nashville",
    "garage door off track Nashville",
    "garage door motor replacement Nashville",
    "garage door service Davidson County",
    "residential garage door Nashville",
    "emergency garage door repair Nashville",
    "garage door company Nashville",
    "garage door near me Nashville",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Trusted Garage Solutions | Nashville Garage Door Experts",
    description:
      "Nashville's trusted partner for residential garage door service and new installation. Fast response, honest pricing. Call (615) 568-8072.",
    type: "website",
    url: "https://www.trustedgaragesolutions.com",
    siteName: "Trusted Garage Solutions",
    locale: "en_US",
    // og:image auto-injected by app/opengraph-image.tsx (file-based metadata API)
  },
  twitter: {
    card: "summary_large_image",
    title: "Trusted Garage Solutions | Nashville Garage Door Experts",
    description:
      "Nashville's trusted partner for garage door repair and installation. Fast response, honest pricing.",
    // twitter:image auto-injected from app/opengraph-image.tsx
  },
  // Uncomment and replace with your Google Search Console verification code:
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
              "@id": "https://www.trustedgaragesolutions.com/#business",
              name: "Trusted Garage Solutions",
              telephone: "(615) 568-8072",
              email: "devon@trustedgaragesolutions.com",
              url: "https://www.trustedgaragesolutions.com",
              image: "https://www.trustedgaragesolutions.com/logos/main-logo.png",
              logo: "https://www.trustedgaragesolutions.com/logos/main-logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nashville",
                addressRegion: "TN",
                postalCode: "37201",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.1627,
                longitude: -86.7816,
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Nashville",
                  sameAs: "https://en.wikipedia.org/wiki/Nashville,_Tennessee",
                },
                { "@type": "AdministrativeArea", name: "Davidson County, TN" },
                { "@type": "AdministrativeArea", name: "Williamson County, TN" },
                { "@type": "AdministrativeArea", name: "Rutherford County, TN" },
                { "@type": "AdministrativeArea", name: "Wilson County, TN" },
                { "@type": "AdministrativeArea", name: "Sumner County, TN" },
                { "@type": "AdministrativeArea", name: "Robertson County, TN" },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "15:00",
                },
              ],
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "3",
                bestRating: "5",
                worstRating: "1",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Garage Door Services",
                itemListElement: [
                  {
                    "@type": "OfferCatalog",
                    name: "Garage Door Repair",
                    itemListElement: [
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Broken Spring Repair" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Off-Track Door Repair" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cable Replacement" } },
                    ],
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "Garage Door Installation",
                    itemListElement: [
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "New Garage Door Installation" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Garage Door Opener Replacement" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "LiftMaster Opener Installation" } },
                    ],
                  },
                ],
              },
              description:
                "Nashville's trusted partner for residential garage door repair and installation. Broken springs, off-track doors, motor replacement, and new installations. Fast response, honest pricing. Call (615) 568-8072.",
              // Add social profile URLs here when available:
              // sameAs: [
              //   "https://www.facebook.com/trustedgaragesolutions",
              //   "https://www.yelp.com/biz/trusted-garage-solutions-nashville",
              //   "https://www.instagram.com/trustedgaragesolutions",
              // ],
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(!sessionStorage.getItem("tgs-loaded")){document.documentElement.classList.add("tgs-loading")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${jost.className} min-h-full flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
        <GarageDoorLoader />
      </body>
    </html>
  );
}
