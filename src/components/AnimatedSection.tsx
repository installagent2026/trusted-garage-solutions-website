import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  blur?: boolean;
}

/** Static wrapper — scroll animations removed to prevent load/hydration flicker. */
export default function AnimatedSection({
  children,
  className = "",
}: Props) {
  return <div className={className}>{children}</div>;
}
