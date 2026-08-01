"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
  type Ref,
} from "react";

/**
 * Scroll entrances, done with an IntersectionObserver and CSS keyframes rather
 * than an animation library — the same effect for a fraction of the JS a
 * visitor has to download before the page becomes interactive.
 */
export function useInView<T extends HTMLElement>({
  once = true,
  threshold = 0.2,
}: { once?: boolean; threshold?: number } = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // No observer available: unhide directly rather than hide forever.
    if (typeof IntersectionObserver === "undefined") {
      element.classList.add("is-in");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, threshold]);

  return { ref, inView };
}

const enterDelay = (seconds: number) =>
  ({ "--enter-delay": `${seconds}s` }) as CSSProperties;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  as?: "div" | "section" | "li" | "span";
};

/** Fades its content up the first time it scrolls into view. */
export function Reveal({
  children,
  className = "",
  delay = 0,
  once = true,
  as: Tag = "div",
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>({ once });

  return (
    <Tag
      ref={ref as Ref<never>}
      style={enterDelay(delay)}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

type GroupChild = ReactElement<{ className?: string; style?: CSSProperties }>;

/** Reveals its direct children one after another. */
export function RevealGroup({
  children,
  className = "",
  stagger = 0.08,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={`${inView ? "is-in" : ""} ${className}`}>
      {Children.map(children, (child, i) => {
        if (!isValidElement(child)) return child;
        const item = child as GroupChild;

        return cloneElement(item, {
          className: `reveal-item ${item.props.className ?? ""}`,
          style: { ...enterDelay(delay + i * stagger), ...item.props.style },
        });
      })}
    </div>
  );
}
