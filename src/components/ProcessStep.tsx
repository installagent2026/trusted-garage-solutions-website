interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function ProcessStep({ step, title, description, isLast = false }: ProcessStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {!isLast && (
        <div
          className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-accent/40 to-accent/10"
          aria-hidden
        />
      )}
      <div className="relative z-10 w-16 h-16 rounded-full bg-charcoal text-accent font-serif text-2xl font-semibold flex items-center justify-center fine-border shadow-gold-glow">
        {step}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-charcoal">{title}</h3>
      <p className="mt-2 text-sm text-text-muted leading-relaxed max-w-xs">{description}</p>
    </div>
  );
}
