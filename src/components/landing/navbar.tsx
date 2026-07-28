"use client";

import { useEffect, useState } from "react";
import { Button, Drawer } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";

import { navLinks } from "@/data/landing";
import { Logo } from "./logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
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
            <a href="#top" className="shrink-0">
              <Logo />
            </a>

            <ul className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-ink-600 hover:text-ink-900 hover:bg-ink-100/70 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-2 lg:flex">
              <Button type="text" href="#" className="font-semibold">
                Sign in
              </Button>
              <Button type="primary" href="#pricing">
                Book a demo
              </Button>
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
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-ink-700 hover:bg-ink-100 block rounded-xl px-3 py-3 text-base font-medium"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          ) : null}
        </AnimatePresence>

        <div className="mt-8 space-y-2">
          <Button block size="large" onClick={() => setOpen(false)}>
            Sign in
          </Button>
          <Button
            block
            size="large"
            type="primary"
            href="#pricing"
            onClick={() => setOpen(false)}
          >
            Book a demo
          </Button>
        </div>
      </Drawer>
    </>
  );
}
