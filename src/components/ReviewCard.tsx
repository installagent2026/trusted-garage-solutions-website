import Image from "next/image";

interface ReviewCardProps {
  name: string;
  quote: string;
  rating: number;
  date?: string;
  image?: string;
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-4 h-4 ${i < rating ? "text-accent" : "text-stone-300"}`}
        >
          <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewCard({ name, quote, rating, date, image }: ReviewCardProps) {
  return (
    <article className="bg-background-warm rounded-2xl p-6 shadow-soft fine-border-light h-full flex flex-col transition-shadow duration-200 hover:shadow-xl">
      <StarRow rating={rating} />
      <blockquote className="mt-4 text-text-muted text-sm leading-relaxed flex-1 italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-6 flex items-center gap-3 pt-4 border-t border-stone-200">
        {image && (
          <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-accent/20">
            <Image src={image} alt="" fill className="object-cover" />
          </div>
        )}
        <div>
          <p className="font-semibold text-charcoal text-sm">{name}</p>
          {date && <p className="text-xs text-text-muted">Verified Customer · {date}</p>}
        </div>
      </div>
    </article>
  );
}
