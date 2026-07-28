import type { Metadata } from "next";
import Link from "next/link";

import { Logo } from "@/components/landing/logo";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden px-5 py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-lines mask-fade-b absolute inset-0" />
        <div className="bg-brand-300/30 absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-[120px]" />
      </div>

      <div className="text-center">
        <Link href="/" className="inline-block">
          <Logo />
        </Link>

        <p className="font-display text-gradient mt-10 text-7xl font-extrabold sm:text-8xl">
          404
        </p>
        <h1 className="font-display text-ink-900 mt-4 text-2xl font-bold sm:text-3xl">
          We could not find that page
        </h1>
        <p className="text-ink-500 mx-auto mt-3 max-w-md text-sm leading-relaxed sm:text-base">
          The link may be outdated or the page may have moved. Everything else is
          still exactly where you left it.
        </p>

        <Link
          href="/"
          className="bg-brand-600 hover:bg-brand-700 shadow-glow mt-9 inline-flex h-12 items-center rounded-xl px-7 text-sm font-semibold text-white transition-colors"
        >
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
