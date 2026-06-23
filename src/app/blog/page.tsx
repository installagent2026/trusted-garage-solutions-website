import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "./data";

export const metadata: Metadata = {
  title: "Garage Door Tips & Guides | Blog",
  description:
    "Expert garage door tips, repair guides, and maintenance advice from Nashville's trusted garage door professionals. Learn about springs, openers, installation, and more.",
  keywords: [
    "garage door blog Nashville",
    "garage door repair tips",
    "garage door maintenance guide",
    "garage door installation advice Nashville TN",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Garage Door Tips & Guides | Trusted Garage Solutions Blog",
    description:
      "Expert garage door tips and repair guides from Nashville's trusted professionals.",
    url: "https://www.trustedgaragesolutions.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal pt-32 pb-16 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-bold text-sm uppercase tracking-widest">
            Our Blog
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white">
            Garage Door Tips &amp; <span className="text-accent">Guides</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Expert advice from Nashville&apos;s trusted garage door
            professionals. Learn how to spot problems early, maintain your door,
            and make smart upgrade decisions.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-xl fine-border-light transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-charcoal text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-lg font-bold text-charcoal group-hover:text-accent transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed flex-1">
                      {post.description}
                    </p>
                    <span className="mt-4 inline-flex items-center text-accent font-semibold text-sm">
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 bg-charcoal overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Need Help With Your{" "}
            <span className="text-accent">Garage Door</span>?
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Don&apos;t wait for a small problem to become a big one. Call
            Nashville&apos;s trusted garage door experts today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6155688072"
              className="inline-flex items-center justify-center gap-2 gold-button font-bold px-8 py-4 rounded-xl text-lg duration-200 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              Call (615) 568-8072
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl text-lg transition-all border border-white/20"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
