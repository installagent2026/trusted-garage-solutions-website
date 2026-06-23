import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug, getAllSlugs } from "../data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://www.trustedgaragesolutions.com/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];
  let listKey = 0;

  function flushList() {
    if (currentList.length > 0) {
      elements.push(
        <ul
          key={`list-${listKey++}`}
          className="space-y-2 my-4 ml-6 list-disc text-gray-700"
        >
          {currentList.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ul>
      );
      currentList = [];
    }
  }

  function formatInline(text: string): string {
    return text
      .replace(/\*\*\((\d{3})\) (\d{3}-\d{4})\*\*/g, '<strong><a href="tel:$1$2" class="text-accent hover:underline">($1) $2</a></strong>')
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>");
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3
          key={i}
          className="text-xl font-bold text-charcoal mt-8 mb-3"
          dangerouslySetInnerHTML={{ __html: formatInline(line.slice(4)) }}
        />
      );
    } else if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2
          key={i}
          className="text-2xl font-black text-charcoal mt-10 mb-4"
          dangerouslySetInnerHTML={{ __html: formatInline(line.slice(3)) }}
        />
      );
    } else if (line.startsWith("- **") || line.startsWith("- ")) {
      const content = line.slice(2);
      currentList.push(content);
    } else if (/^\d+\.\s/.test(line)) {
      flushList();
      const content = line.replace(/^\d+\.\s/, "");
      currentList.push(content);
    } else if (line.trim() === "") {
      flushList();
    } else {
      flushList();
      elements.push(
        <p
          key={i}
          className="text-gray-700 leading-relaxed my-4"
          dangerouslySetInnerHTML={{ __html: formatInline(line) }}
        />
      );
    }
  }
  flushList();

  return elements;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category or different posts)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const wordCount = post.content.split(/\s+/).length;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    wordCount: wordCount,
    image: `https://www.trustedgaragesolutions.com${post.image}`,
    author: {
      "@type": "Organization",
      name: "Trusted Garage Solutions",
      url: "https://www.trustedgaragesolutions.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Trusted Garage Solutions",
      url: "https://www.trustedgaragesolutions.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.trustedgaragesolutions.com/logos/main-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.trustedgaragesolutions.com/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.trustedgaragesolutions.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.trustedgaragesolutions.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.trustedgaragesolutions.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-24">
        <div className="relative h-64 sm:h-80 md:h-96">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80" />
        </div>
      </section>

      {/* Article */}
      <article className="relative -mt-20 z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-soft fine-border-light p-8 sm:p-12">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
              <span className="bg-accent/10 text-accent font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wide">
                {post.category}
              </span>
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

            <h1 className="text-3xl sm:text-4xl font-black text-charcoal leading-tight">
              {post.title}
            </h1>

            {/* Content */}
            <div className="mt-8 prose-custom">
              {renderMarkdown(post.content)}
            </div>

            {/* CTA Box */}
            <div className="relative mt-12 bg-charcoal rounded-2xl p-8 text-center overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white">
                  Need Garage Door Help?
                </h3>
                <p className="mt-2 text-gray-400">
                  Call Nashville&apos;s trusted garage door professionals today.
                </p>
                <a
                  href="tel:6155688072"
                  className="mt-6 inline-flex items-center gap-2 gold-button font-bold px-8 py-4 rounded-xl text-lg duration-200 hover:scale-105"
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
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-charcoal text-center mb-12">
            More Articles You Might Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((related) => (
              <Link key={related.slug} href={`/blog/${related.slug}`}>
                <article className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-xl fine-border-light transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs text-gray-500">
                      {new Date(related.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <h3 className="mt-1 text-base font-bold text-charcoal group-hover:text-accent transition-colors leading-snug">
                      {related.title}
                    </h3>
                    <span className="mt-3 text-accent font-semibold text-sm">
                      Read More &rarr;
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal-light text-white font-bold px-8 py-3 rounded-xl transition-all duration-200"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
