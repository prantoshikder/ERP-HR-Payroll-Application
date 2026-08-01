import type { ReactNode } from "react";
import Link from "next/link";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

/**
 * Button-looking `next/link`. antd's Button renders an `<a>` when given `href`,
 * which cannot be wrapped in Link, so page-level CTAs use this instead to keep
 * client-side navigation.
 */
export function LinkButton({ href, children, variant = "primary", className = "" }: Props) {
  const base =
    "inline-flex h-12 items-center justify-center rounded-xl px-7 text-sm font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-brand-600 hover:bg-brand-700 shadow-glow text-white"
      : "border-ink-200 text-ink-700 hover:border-ink-300 hover:bg-ink-50 border bg-white";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
