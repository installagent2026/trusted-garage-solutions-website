import { faqs } from "@/lib/data";

interface FaqListProps {
  items?: typeof faqs;
  className?: string;
}

export default function FaqList({ items = faqs, className = "" }: FaqListProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <details
          key={item.question}
          className="group bg-white rounded-xl fine-border-light overflow-hidden shadow-soft open:shadow-md"
        >
          <summary className="flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer focus-ring list-none min-h-[44px] [&::-webkit-details-marker]:hidden">
            <span className="font-semibold text-charcoal pr-4">{item.question}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </summary>
          <div className="px-6 pb-5 text-text-muted text-sm leading-relaxed border-t border-stone-100 pt-4">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
