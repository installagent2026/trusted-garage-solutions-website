import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import TrustBadgeRow from "@/components/TrustBadgeRow";
import { PrimaryCTA, SecondaryCTA, PhoneIcon } from "@/components/PrimaryCTA";
import ReviewCard from "@/components/ReviewCard";
import ProcessStep from "@/components/ProcessStep";
import FaqList from "@/components/FaqList";
import { FAQSchema, ReviewSchema } from "@/components/SchemaScripts";
import {
  PHONE,
  PHONE_HREF,
  faqs,
  reviews,
  processSteps,
  serviceAreas,
} from "@/lib/data";

const services = [
  {
    title: "New Door Installation",
    description:
      "Expert guidance on style and material, professional measurement, and safe installation.",
    image: "/images/modern_house.jpeg",
    href: "/services#installation",
    emergency: false,
    span: "md:col-span-1",
  },
  {
    title: "Broken Spring Repair",
    description:
      "Heard a loud bang? We'll have a new pair of springs installed within an hour.",
    image: "/images/broken_spring_repair.webp",
    href: "/services#springs",
    emergency: true,
    span: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Motor Replacement",
    description:
      "Premium LiftMaster openers with HD cameras, WiFi, and myQ app integration.",
    image: "/images/lift_master_motor.jpeg",
    href: "/services#motor",
    emergency: false,
    span: "md:col-span-1",
  },
  {
    title: "Off-Track Repair",
    description:
      "Door fell off track or sitting crooked? Fast emergency response to get you moving again.",
    image: "/images/garage_off_track_repair.webp",
    href: "/services#off-track",
    emergency: true,
    span: "md:col-span-1 md:row-span-2",
  },
];

const stats = [
  { value: "1hr", label: "Average Response Time" },
  { value: "100%", label: "Satisfaction Guarantee" },
  { value: "500+", label: "Doors Serviced" },
];

const trustPoints = [
  {
    title: "Fast Response",
    text: "Usually on-site within one hour for emergencies.",
  },
  {
    title: "Honest Pricing",
    text: "Upfront quotes with no hidden fees — ever.",
  },
  {
    title: "Premium Parts",
    text: "LiftMaster openers and springs replaced in pairs.",
  },
  {
    title: "Local & Trusted",
    text: "Nashville owned. Your neighbors, not a call center.",
  },
];

export default function Home() {
  return (
    <>
      <FAQSchema />
      <ReviewSchema />

      {/* HERO — editorial split */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/images/tgs_hero_image.png"
          alt="Modern Nashville home with a professionally installed residential garage door by Trusted Garage Solutions"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-2xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest">
              Nashville&apos;s Premium Garage Door Service
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1]">
              Your Garage Door,{" "}
              <span className="text-accent">Fixed Today</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-stone-300 leading-relaxed">
              Expert repair and installation for Nashville homeowners. Fast response,
              honest pricing, and craftsmanship you can trust.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <PrimaryCTA href={PHONE_HREF} icon={<PhoneIcon />}>
                Call {PHONE}
              </PrimaryCTA>
              <SecondaryCTA href="/contact">Get a Free Quote</SecondaryCTA>
            </div>

            <p className="mt-6 text-sm text-stone-400">
              Avg. response under 1 hour · Nashville local · No hidden fees
            </p>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-background-warm border-y border-stone-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustBadgeRow />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-charcoal py-12">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="glass-card-soft fine-border rounded-2xl px-6 py-7 text-center h-full">
                <div className="text-3xl font-serif font-semibold text-accent">{stat.value}</div>
                <div className="text-sm text-stone-400 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection blur>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest">
              We Understand the Stress
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Door won&apos;t open? Heard a loud bang? Car stuck inside?
            </h2>
            <p className="mt-6 text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Garage door emergencies happen at the worst times. Take a breath — call us and
              a trained technician will be on the way, usually within the hour.
            </p>
            <div className="mt-8">
              <PrimaryCTA href={PHONE_HREF} icon={<PhoneIcon className="w-5 h-5" />}>
                Get Help Now
              </PrimaryCTA>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES — bento grid */}
      <section className="py-24 bg-background-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection blur className="mb-16">
            <SectionHeader
              eyebrow="What We Do"
              title="Our Services"
              subtitle="Whether you're renovating, building your dream home, or facing an emergency — TGS delivers premium results."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 auto-rows-fr">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.08} className={service.span}>
                <Link href={service.href} className="block h-full cursor-pointer focus-ring rounded-2xl">
                  <div className="group relative bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-xl fine-border-light transition-shadow duration-200 h-full flex flex-col">
                    <div className={`relative overflow-hidden ${service.emergency ? "h-64 md:h-72" : "h-48"}`}>
                      <Image
                        src={service.image}
                        alt={`${service.title} — Trusted Garage Solutions, Nashville TN`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                      {service.emergency && (
                        <span className="absolute top-4 right-4 bg-accent text-charcoal text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                          Emergency
                        </span>
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold text-charcoal group-hover:text-accent transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-text-muted text-sm leading-relaxed flex-1">
                        {service.description}
                      </p>
                      <span className="mt-4 inline-flex items-center text-accent font-semibold text-sm">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection blur className="mb-16">
            <SectionHeader
              eyebrow="Simple Process"
              title="How It Works"
              subtitle="From your first call to a door that works perfectly — three straightforward steps."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.12}>
                <ProcessStep
                  step={step.step}
                  title={step.title}
                  description={step.description}
                  isLast={i === processSteps.length - 1}
                />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-14 text-center">
            <PrimaryCTA href={PHONE_HREF} icon={<PhoneIcon />}>
              Start With a Call
            </PrimaryCTA>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" blur>
              <SectionHeader
                eyebrow="Why Choose Us"
                title={
                  <>
                    The Name You Can <span className="text-accent">Trust</span>
                  </>
                }
                subtitle="We're not a faceless corporation — we're your Nashville neighbors. When your garage door breaks at the worst possible moment, we answer the phone and show up fast."
                align="left"
                dark
              />

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {trustPoints.map((point) => (
                  <div
                    key={point.title}
                    className="glass-card-soft fine-border rounded-xl p-5"
                  >
                    <h3 className="font-semibold text-accent text-sm uppercase tracking-wider">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-stone-300 text-sm leading-relaxed">{point.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-xl bg-background-warm/5 border border-white/10">
                <p className="text-stone-300 text-sm leading-relaxed italic">
                  &ldquo;Trusted Garage Solutions was built on one idea: treat every homeowner
                  the way we&apos;d want to be treated. That means showing up on time, quoting
                  honestly, and doing the job right the first time.&rdquo;
                </p>
                <p className="mt-3 font-semibold text-white text-sm">— Devon, Owner</p>
              </div>

              <div className="mt-8">
                <PrimaryCTA href={PHONE_HREF}>Call Us Today</PrimaryCTA>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl fine-border">
                <Image
                  src="/images/tgs_hero_image2.png"
                  alt="Trusted Garage Solutions technician completing a residential garage door repair in Nashville TN"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 bg-background-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection blur className="mb-16">
            <SectionHeader
              eyebrow="Testimonials"
              title="Rated 5.0 by Nashville Homeowners"
              subtitle="Real reviews from neighbors who trust us with their garage doors."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <AnimatedSection key={review.name} delay={i * 0.1}>
                <ReviewCard {...review} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-14 text-center">
            <PrimaryCTA href={PHONE_HREF} icon={<PhoneIcon />}>
              Join Our Happy Customers — Call Now
            </PrimaryCTA>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection blur className="mb-12">
            <SectionHeader
              eyebrow="FAQ"
              title="Common Questions"
              subtitle="Quick answers to what Nashville homeowners ask us most."
            />
          </AnimatedSection>
          <AnimatedSection>
            <FaqList />
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-24 bg-background-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionHeader
                eyebrow="Service Area"
                title="Serving Nashville & Surrounding Areas"
                subtitle="We proudly serve Davidson County and the surrounding Nashville metro. If you're nearby and need garage door help, give us a call — we'll be there."
                align="left"
              />
              <div className="mt-8 flex flex-wrap gap-3">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-2 bg-white text-charcoal text-sm font-medium px-4 py-2 rounded-full fine-border-light shadow-soft"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-accent">
                      <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.274 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                    </svg>
                    {area}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-soft fine-border-light h-80 lg:h-96 p-1 bg-white">
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
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/broken_spring_repair.webp"
          alt="Close-up of a broken garage door torsion spring being replaced — emergency repair service in Nashville TN"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/85" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.25)_55%,rgba(0,0,0,0.7)_100%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection blur>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest">
              Available Now · Weekdays 8–5 · Sat 9–3
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
              Garage Door Emergency?
              <br />
              <span className="text-accent">We&apos;re Here to Help.</span>
            </h2>
            <p className="mt-6 text-stone-300 text-lg max-w-2xl mx-auto">
              Don&apos;t stress — call us now and we&apos;ll have a technician on the way.
              If we don&apos;t answer, you&apos;ll hear from us within an hour.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <PrimaryCTA href={PHONE_HREF} icon={<PhoneIcon />}>
                Call {PHONE}
              </PrimaryCTA>
              <SecondaryCTA href="/contact">Get a Free Quote</SecondaryCTA>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
