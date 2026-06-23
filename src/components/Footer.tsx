import Link from "next/link";
import Image from "next/image";
import TrustBadgeRow from "@/components/TrustBadgeRow";
import { PHONE, PHONE_HREF, serviceAreas } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-charcoal text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 pb-8 border-b border-white/10">
          <TrustBadgeRow variant="dark" compact />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Image
              src="/logos/main-logo.png"
              alt="Trusted Garage Solutions"
              width={200}
              height={50}
              className="h-12 w-auto brightness-0 invert mb-4"
            />
            <p className="text-stone-400 text-sm leading-relaxed">
              Nashville&apos;s trusted partner for residential garage door service and new
              installation.
            </p>
          </div>

          <div>
            <h3 className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/services#installation", label: "New Installation" },
                { href: "/services#springs", label: "Spring Repair" },
                { href: "/services#motor", label: "Opener Replacement" },
                { href: "/services#off-track", label: "Off-Track Repair" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-accent transition-colors text-sm cursor-pointer focus-ring rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-stone-400 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <a href={PHONE_HREF} className="hover:text-accent transition-colors cursor-pointer focus-ring rounded">
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href="mailto:devon@trustedgaragesolutions.com"
                  className="hover:text-accent transition-colors cursor-pointer focus-ring rounded"
                >
                  devon@trustedgaragesolutions.com
                </a>
              </li>
              <li>Nashville, TN</li>
              <li className="pt-2">
                <span className="text-white font-semibold block">Hours</span>
                Weekdays: 8am – 5pm
                <br />
                Saturday: 9am – 3pm
                <br />
                Sunday: Closed
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Trusted Garage Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-accent transition-colors cursor-pointer focus-ring rounded">
              Home
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors cursor-pointer focus-ring rounded">
              About
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors cursor-pointer focus-ring rounded">
              Contact
            </Link>
            <a href="/sitemap.xml" className="hover:text-accent transition-colors cursor-pointer focus-ring rounded">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
