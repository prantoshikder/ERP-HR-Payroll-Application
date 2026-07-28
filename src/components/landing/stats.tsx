"use client";

import { motion } from "motion/react";

import { stats } from "@/data/landing";
import { RevealGroup, fadeUp } from "@/components/ui/reveal";

export function Stats() {
  return (
    <section className="py-16 sm:py-20">
      <div className="shell">
        <div className="from-brand-700 via-brand-600 to-brand-800 shadow-glow relative overflow-hidden rounded-3xl bg-gradient-to-br px-6 py-12 sm:px-12 sm:py-14">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px]"
          />
          <div
            aria-hidden
            className="bg-mint-400/25 absolute -top-24 -right-16 h-72 w-72 rounded-full blur-[100px]"
          />

          <RevealGroup
            className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.1}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <p className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {stat.value}
                </p>
                <p className="text-brand-100 mt-2 text-sm font-semibold">
                  {stat.label}
                </p>
                <p className="text-brand-200/70 mt-1 text-xs">{stat.sub}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
