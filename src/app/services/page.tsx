import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import FaqList from "@/components/FaqList";
import { PrimaryCTA, SecondaryCTA, PhoneIcon } from "@/components/PrimaryCTA";
import { PHONE_HREF, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Garage Door Services Nashville TN | Repair, Installation & Emergency",
  description:
    "Expert garage door repair and installation in Nashville TN. Broken spring repair, off-track doors, LiftMaster opener replacement, and new door installation. Same-day emergency service. Call (615) 568-8072.",
  keywords: [
    "garage door repair Nashville TN",
    "garage door installation Nashville",
    "broken spring repair Nashville",
    "garage door off track repair Nashville",
    "LiftMaster opener installation Nashville",
    "emergency garage door service Nashville",
    "garage door spring replacement Nashville TN",
    "garage door motor replacement Nashville",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Garage Door Services | Trusted Garage Solutions Nashville",
    description:
      "Expert garage door repair and installation in Nashville. Broken springs, off-track doors, opener replacement, and new installations. Call (615) 568-8072.",
    url: "https://www.trustedgaragesolutions.com/services",
  },
};

const services = [
  {
    id: "installation",
    title: "New Door Installation",
    tagline: "Find the Perfect Door for Your Home",
    description:
      "Looking for a new garage door? We're here to help you make the perfect choice for your home. Our experienced technicians will install your door safely and correctly, ensuring a smooth open and close every time.",
    features: [
      "Expert guidance on choosing the right door style and material",
      "Professional measurement and fitting",
      "Safe, correct installation with tested operation",
      "Full cleanup after installation",
    ],
    image: "/images/modern_house.jpeg",
    reverse: false,
    emergency: false,
  },
  {
    id: "springs",
    title: "Broken Spring Repair",
    tagline: "Fast Emergency Response",
    description:
      "Did you hear a loud bang in your garage? Are you struggling to open the door manually? It sounds like you have a broken spring. No problem! We'll have a new pair installed within an hour. We always replace springs in pairs to ensure balanced operation and prevent future breakdowns.",
    features: [
      "Emergency response — usually within 1 hour",
      "Always replace springs in pairs for safety",
      "Torsion and extension spring specialists",
      "Same-day service available",
    ],
    image: "/images/broken_spring_repair.webp",
    reverse: true,
    emergency: true,
  },
  {
    id: "motor",
    title: "Motor / Opener Replacement",
    tagline: "Smart, Premium Openers",
    description:
      "Unfortunately, garage door motors have a life span and eventually need to be replaced. We provide some of the best quality motors on the market — LiftMaster openers equipped with built-in HD cameras, 360° LED lighting, WiFi connectivity, and myQ App integration so you can open and close your garage from anywhere.",
    features: [
      "Premium LiftMaster openers",
      "Built-in HD camera & 360° LED lighting",
      "WiFi connectivity with myQ app integration",
      "Open and close your garage from anywhere",
    ],
    image: "/images/lift_master_motor.jpeg",
    reverse: false,
    emergency: false,
  },
  {
    id: "off-track",
    title: "Off-Track Repair",
    tagline: "Get Your Door Back on Track",
    description:
      "Did your door fall off track or is it sitting crooked? This can be a safety hazard and should be addressed immediately. Our technicians will get out to you as fast as they can and get your door back up and running safely.",
    features: [
      "Fast emergency response",
      "Safe realignment of door panels",
      "Track inspection and repair",
      "Preventive adjustments to avoid future issues",
    ],
    image: "/images/garage_off_track_repair.webp",
    reverse: true,
    emergency: true,
  },
];

const serviceFaqs = faqs.slice(0, 4);

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/tgs_hero_image2.png" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Our Services
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold text-white">
            Expert Garage Door <span className="text-accent">Solutions</span>
          </h1>
          <p className="mt-6 text-stone-300 text-lg max-w-2xl mx-auto">
            Premium repair and installation for Nashville homeowners — from emergency
            spring repair to smart LiftMaster openers.
          </p>
        </div>
      </section>

      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 ${i % 2 === 0 ? "bg-white" : "bg-background-warm"} scroll-mt-28`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                service.reverse ? "lg:grid-flow-dense" : ""
              }`}
            >
              <AnimatedSection
                direction={service.reverse ? "right" : "left"}
                className={service.reverse ? "lg:col-start-2" : ""}
              >
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-accent font-semibold text-sm uppercase tracking-widest">
                    {service.tagline}
                  </span>
                  {service.emergency && (
                    <span className="bg-accent/15 text-accent-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Emergency Service
                    </span>
                  )}
                </div>
                <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-charcoal">
                  {service.title}
                </h2>
                <p className="mt-6 text-text-muted leading-relaxed">{service.description}</p>
                <ul className="mt-8 space-y-3">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-accent flex-shrink-0 mt-0.5">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-muted">{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-wrap gap-4">
                  <PrimaryCTA href={PHONE_HREF} icon={<PhoneIcon className="w-5 h-5" />}>
                    Call Now
                  </PrimaryCTA>
                  <SecondaryCTA href="/contact" dark={false}>
                    Get a Quote
                  </SecondaryCTA>
                </div>
              </AnimatedSection>

              <AnimatedSection direction={service.reverse ? "left" : "right"} delay={0.2}>
                <div className="rounded-2xl overflow-hidden shadow-soft fine-border-light transition-shadow duration-200 hover:shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection blur className="mb-12">
            <SectionHeader
              eyebrow="FAQ"
              title="Service Questions"
              subtitle="Quick answers about our garage door services."
            />
          </AnimatedSection>
          <AnimatedSection>
            <FaqList items={serviceFaqs} />
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-20 bg-charcoal text-center overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <AnimatedSection blur>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">
              Need Help With Your Garage Door?
            </h2>
            <p className="mt-4 text-stone-300">
              Call us today or fill out our contact form for a free quote. We respond fast.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <PrimaryCTA href={PHONE_HREF} icon={<PhoneIcon />}>
                Call Now
              </PrimaryCTA>
              <SecondaryCTA href="/contact">Contact Us</SecondaryCTA>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
