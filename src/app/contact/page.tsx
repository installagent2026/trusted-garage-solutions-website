import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import TrustBadgeRow from "@/components/TrustBadgeRow";
import { PrimaryCTA, PhoneIcon } from "@/components/PrimaryCTA";
import { PHONE, PHONE_HREF, EMAIL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us | Free Garage Door Quote Nashville TN",
  description:
    "Get a free garage door repair or installation quote in Nashville TN. Call (615) 568-8072 for fast response or fill out our contact form. Trusted Garage Solutions — honest pricing, no hidden fees.",
  keywords: [
    "garage door quote Nashville",
    "contact garage door company Nashville",
    "free garage door estimate Nashville TN",
    "garage door repair quote Nashville",
    "Nashville garage door phone number",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Trusted Garage Solutions | Free Garage Door Quote Nashville",
    description:
      "Get a free, no-obligation garage door quote. Call (615) 568-8072 or fill out our form. Fast response guaranteed.",
    url: "https://www.trustedgaragesolutions.com/contact",
  },
};


export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-charcoal overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Get in Touch
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold text-white">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="mt-6 text-stone-300 text-lg max-w-2xl mx-auto">
            Need immediate help? Call{" "}
            <a href={PHONE_HREF} className="text-accent font-bold hover:underline cursor-pointer focus-ring rounded">
              {PHONE}
            </a>
            . If we don&apos;t answer, you&apos;ll hear from us within an hour.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryCTA href={PHONE_HREF} icon={<PhoneIcon />}>
              Call Now — Fastest Response
            </PrimaryCTA>
          </div>
        </div>
      </section>

      <section className="py-8 bg-background-warm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4">
          <TrustBadgeRow compact />
        </div>
      </section>

      <section className="py-24 bg-background-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <div className="bg-white rounded-2xl shadow-soft fine-border-light p-8 sm:p-10">
                <h2 className="text-2xl font-serif font-semibold text-charcoal">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-text-muted text-sm">
                  Fill out the form below for a free, no-obligation quote.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href={PHONE_HREF}
                    className="bg-white rounded-2xl shadow-soft fine-border-light p-6 hover:shadow-xl transition-shadow duration-200 cursor-pointer focus-ring"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                      <PhoneIcon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-charcoal">Phone</h3>
                    <p className="text-accent font-semibold">{PHONE}</p>
                  </a>

                  <a
                    href={`mailto:${EMAIL}`}
                    className="bg-white rounded-2xl shadow-soft fine-border-light p-6 hover:shadow-xl transition-shadow duration-200 cursor-pointer focus-ring"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-accent">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-charcoal">Email</h3>
                    <p className="text-accent font-semibold text-sm break-all">{EMAIL}</p>
                  </a>

                  <div className="bg-white rounded-2xl shadow-soft fine-border-light p-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-accent">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-charcoal">Hours</h3>
                    <p className="text-text-muted text-sm">
                      Mon–Fri: 8am – 5pm
                      <br />
                      Sat: 9am – 3pm
                      <br />
                      Sun: Closed
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl shadow-soft fine-border-light p-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-accent">
                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-charcoal">Service Area</h3>
                    <p className="text-text-muted text-sm">
                      Davidson County &amp; surrounding Nashville metro areas
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-soft fine-border-light h-80 p-1 bg-white">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206252.72785388648!2d-86.9713512!3d36.1744655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864ec3213eb903d%3A0x7d3fb9d0a1e9daa0!2sNashville%2C%20TN!5e0!3m2!1sen!2sus!4v1711000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Trusted Garage Solutions service area - Nashville TN"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
