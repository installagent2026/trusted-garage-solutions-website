import Link from "next/link";

interface PrimaryCTAProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function PrimaryCTA({ href, children, icon, className = "", external }: PrimaryCTAProps) {
  const classes = `inline-flex items-center justify-center gap-2 gold-button font-bold px-8 py-4 rounded-xl text-lg cursor-pointer focus-ring min-h-[44px] ${className}`;

  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {icon}
      {children}
    </Link>
  );
}

interface SecondaryCTAProps {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}

export function SecondaryCTA({ href, children, dark = true, className = "" }: SecondaryCTAProps) {
  const classes = dark
    ? "inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors duration-200 border border-white/20 cursor-pointer focus-ring min-h-[44px]"
    : "inline-flex items-center justify-center bg-charcoal/5 hover:bg-charcoal/10 text-charcoal font-bold px-8 py-4 rounded-xl text-lg transition-colors duration-200 border border-charcoal/10 cursor-pointer focus-ring min-h-[44px]";

  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={`${classes} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${classes} ${className}`}>
      {children}
    </Link>
  );
}

export function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  );
}
