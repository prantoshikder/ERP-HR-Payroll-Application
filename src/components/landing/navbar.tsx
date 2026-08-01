"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Drawer } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";

import { navLinks } from "@/data/landing";
import { RouteButton } from "@/components/ui/route-button";
import { Logo } from "./logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
  });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "border-ink-200/70 border-b bg-white/80 backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
          }`}
        >
          <nav
            className="shell flex items-center justify-between"
            style={{ height: "var(--nav-h)" }}
            aria-label="Main"
          >
            <Link href="/" className="shrink-0">
              <Logo />
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const active = pathname === link.href;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`hover:bg-ink-100/70 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                        active
                          ? "text-brand-700 bg-brand-50/70"
                          : "text-ink-600 hover:text-ink-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="hidden items-center gap-2 lg:flex">
              <RouteButton type="text" href="/contact" className="font-semibold">
                Contact sales
              </RouteButton>
              <RouteButton type="primary" href="/pricing">
                Start free trial
              </RouteButton>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="border-ink-200 text-ink-700 grid h-10 w-10 place-items-center rounded-xl border bg-white lg:hidden"
            >
              <MenuOutlined />
            </button>
          </nav>
        </div>
      </motion.header>

      <Drawer
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        size={300}
        closable={false}
        styles={{ body: { padding: 20 } }}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-ink-500 hover:text-ink-900 grid h-9 w-9 place-items-center rounded-lg"
          >
            <CloseOutlined />
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.ul
              initial="hidden"
              animate="show"
              className="mt-8 space-y-1"
              variants={{ show: { transition: { staggerChildren: 0.05 } } }}
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: 16 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`hover:bg-ink-100 block rounded-xl px-3 py-3 text-base font-medium ${
                      pathname === link.href ? "text-brand-700 bg-brand-50" : "text-ink-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          ) : null}
        </AnimatePresence>

        <div className="mt-8 space-y-2">
          <RouteButton
            block
            size="large"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Contact sales
          </RouteButton>
          <RouteButton
            block
            size="large"
            type="primary"
            href="/pricing"
            onClick={() => setOpen(false)}
          >
            Start free trial
          </RouteButton>
        </div>
      </Drawer>
    </>
  );
}
