"use client";

import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi2";

/** Distance scrolled before the button appears. */
const SHOW_AFTER = 100;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`bg-brand-600 hover:bg-brand-700 focus-visible:ring-brand-300 fixed right-5 bottom-5 z-40 grid h-11 w-11 place-items-center rounded-xl text-lg text-white shadow-lg transition-all duration-300 focus-visible:ring-4 focus-visible:outline-none sm:right-8 sm:bottom-8 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <HiArrowUp />
    </button>
  );
}
