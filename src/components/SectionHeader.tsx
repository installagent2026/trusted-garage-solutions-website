interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`${alignClass} ${className}`}>
      <span className="text-accent font-semibold text-sm uppercase tracking-widest">
        {eyebrow}
      </span>
      <h2
        className={`mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight ${
          dark ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "text-stone-300" : "text-text-muted"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
