import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import TrustBadgeRow from "@/components/TrustBadgeRow";
import { PrimaryCTA, SecondaryCTA, PhoneIcon } from "@/components/PrimaryCTA";
import { PHONE_HREF } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Trusted Garage Solutions | Nashville's Local Garage Door Experts",
  description:
    "Locally owned Nashville garage door company built on trust, speed, and quality. Meet the team behind Trusted Garage Solutions — your neighbors, not a call center. Serving Davidson County and surrounding areas.",
  keywords: [
    "Nashville garage door company",
    "local garage door service Nashville",
    "garage door experts Nashville TN",
    "trusted garage door company Nashville",
    "Davidson County garage door service",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Trusted Garage Solutions Nashville",
    description:
      "Locally owned Nashville garage door company. Trust, speed, and quality on every job. Serving Davidson County and surrounding areas.",
    url: "https://www.trustedgaragesolutions.com/about",
  },
};


const values = [
  {
    title: "Trust",
    description:
      "We show up when we say we will, charge what we quote, and stand behind every job.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Speed",
    description:
      "Garage door emergencies don't wait, and neither do we. We aim to be at your door within an hour.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Quality",
    description:
      "We use premium parts like LiftMaster openers and always replace springs in pairs for lasting results.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Community",
    description:
      "We're Nashville born and raised. This is our community, and we treat every customer like a neighbor.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/modern_house.jpeg" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            About Us
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold text-white">
            Nashville&apos;s <span className="text-accent">Trusted</span> Garage Door Experts
          </h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" blur>
              <SectionHeader
                eyebrow="Our Story"
                title="Built on Trust, Driven by Service"
                align="left"
              />
              <p className="mt-6 text-text-muted leading-relaxed">
                Trusted Garage Solutions was founded with a simple idea: Nashville
                homeowners deserve a garage door company they can actually trust.
                No surprise fees, no pushy upsells, no technicians who disappear —
                just honest work from people who care.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                We know that a broken garage door can ruin your day. That&apos;s why we
                prioritize speed without cutting corners. Whether it&apos;s a broken spring
                at 8am or a new installation consultation, we treat every call like it
                matters — because it does.
              </p>

              <div className="mt-8 p-6 rounded-xl bg-background-warm fine-border-light">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-charcoal flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-serif text-xl font-semibold">D</span>
                  </div>
                  <div>
                    <p className="text-text-muted text-sm leading-relaxed italic">
                      &ldquo;Every homeowner deserves a technician who shows up on time,
                      explains the problem clearly, and fixes it right the first time.
                      That&apos;s the standard we hold ourselves to.&rdquo;
                    </p>
                    <p className="mt-3 font-semibold text-charcoal text-sm">Devon — Owner, Trusted Garage Solutions</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl fine-border">
                  <Image
                    src="/images/tgs_hero_image.webp"
                    alt="Trusted Garage Solutions quality work"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background-warm border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4">
          <TrustBadgeRow />
        </div>
      </section>

      <section className="py-24 bg-background-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection blur className="mb-16">
            <SectionHeader eyebrow="What We Stand For" title="Our Values" />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-xl fine-border-light transition-shadow duration-200 h-full">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                    {value.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-serif font-semibold text-charcoal">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-charcoal text-center overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <AnimatedSection blur>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">
              Ready to Work With a Team You Can <span className="text-accent">Trust</span>?
            </h2>
            <p className="mt-4 text-stone-300">
              Give us a call or send a message. We&apos;d love to help with your garage door needs.
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
