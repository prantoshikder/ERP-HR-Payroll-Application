import type { CSSProperties, ReactNode } from "react";
import {
  HiArrowUp,
  HiOutlineBuildingLibrary,
  HiCheckCircle,
  HiOutlineUserGroup,
} from "react-icons/hi2";

import { dashboardPreview } from "@/data/landing";

const { url, stats, progress, bars, payrollRows, badge } = dashboardPreview;

const statIcons: Record<string, ReactNode> = {
  cost: <HiOutlineBuildingLibrary />,
  headcount: <HiOutlineUserGroup />,
};

/**
 * Fake product screenshot in the hero. Animated entirely in CSS — it sits
 * above the fold, so nothing here may wait on hydration to become visible.
 */
const delay = (seconds: number) =>
  ({ "--enter-delay": `${seconds}s` }) as CSSProperties;

export function DashboardPreview() {
  return (
    <div className="relative">
      {/* glow behind the frame */}
      <div
        aria-hidden
        className="from-brand-500/25 via-brand-400/10 absolute -inset-x-10 -top-8 bottom-0 rounded-[40px] bg-linear-to-b to-transparent blur-2xl"
      />

      <div
        style={delay(0.25)}
        className="ring-ink-900/5 shadow-lift enter relative overflow-hidden rounded-2xl bg-white ring-1"
      >
        {/* window chrome */}
        <div className="border-ink-100 bg-ink-50/70 flex items-center gap-2 border-b px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="text-ink-400 border-ink-200 mx-auto rounded-md border bg-white px-3 py-1 text-[11px]">
            {url}
          </div>
        </div>

        <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[1fr_1.35fr]">
          {/* left column */}
          <div className="space-y-4">
            {stats.map((stat, i) => (
              <StatCard
                key={stat.key}
                icon={statIcons[stat.key]}
                label={stat.label}
                value={stat.value}
                delta={stat.delta}
                delay={0.5 + i * 0.1}
              />
            ))}

            <div
              style={delay(0.7)}
              className="border-ink-100 enter rounded-xl border p-4"
            >
              <p className="text-ink-500 text-[11px] font-semibold tracking-wider uppercase">
                Run progress
              </p>
              <div className="mt-3 space-y-2.5">
                {progress.map((item, i) => (
                  <div key={item.label}>
                    <div className="text-ink-600 mb-1 flex justify-between text-xs">
                      <span>{item.label}</span>
                      <span className="tabular-nums">{item.pct}%</span>
                    </div>
                    <div className="bg-ink-100 h-1.5 overflow-hidden rounded-full">
                      <div
                        style={{ width: `${item.pct}%`, ...delay(0.9 + i * 0.12) }}
                        className={`grow-x h-full rounded-full ${
                          item.pct === 100 ? "bg-mint-500" : "bg-brand-500"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* right column */}
          <div className="space-y-4">
            <div
              style={delay(0.55)}
              className="border-ink-100 enter rounded-xl border p-4"
            >
              <div className="flex items-baseline justify-between">
                <p className="text-ink-900 text-sm font-semibold">
                  Payroll cost trend
                </p>
                <span className="text-mint-600 bg-mint-500/10 rounded-full px-2 py-0.5 text-[11px] font-semibold">
                  On budget
                </span>
              </div>

              <div className="mt-5 flex h-28 items-end gap-2 sm:gap-3">
                {bars.map((bar, i) => (
                  <div
                    key={bar.month}
                    className="flex flex-1 flex-col items-center gap-2"
                  >
                    <div
                      style={{
                        height: `${bar.value}%`,
                        ...delay(0.8 + i * 0.07),
                      }}
                      className={`grow-y w-full rounded-t-md ${
                        i === bars.length - 2
                          ? "from-brand-600 to-brand-400 bg-linear-to-t"
                          : "bg-brand-100"
                      }`}
                    />
                    <span className="text-ink-400 text-[10px]">{bar.month}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={delay(0.68)}
              className="border-ink-100 enter overflow-hidden rounded-xl border"
            >
              <div className="border-ink-100 text-ink-500 grid grid-cols-[1.6fr_0.8fr_0.7fr] border-b px-4 py-2.5 text-[11px] font-semibold tracking-wider uppercase">
                <span>Employee</span>
                <span className="text-right">Net pay</span>
                <span className="text-right">Status</span>
              </div>
              {payrollRows.map((row, i) => (
                <div
                  key={row.name}
                  style={delay(0.95 + i * 0.09)}
                  className="border-ink-50 enter-x grid grid-cols-[1.6fr_0.8fr_0.7fr] items-center border-b px-4 py-2.5 last:border-b-0"
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <span className="bg-brand-50 text-brand-700 grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px] font-bold">
                      {row.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                    <div className="min-w-0">
                      <p className="text-ink-800 truncate text-xs font-semibold">
                        {row.name}
                      </p>
                      <p className="text-ink-400 truncate text-[10px]">
                        {row.role}
                      </p>
                    </div>
                  </div>
                  <span className="text-ink-900 text-right text-xs font-semibold tabular-nums">
                    {row.net}
                  </span>
                  <span className="text-right">
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                        row.status === "Paid"
                          ? "bg-mint-500/10 text-mint-600"
                          : "bg-amber-400/15 text-amber-600"
                      }`}
                    >
                      {row.status}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* floating badge */}
      <div
        style={delay(1.5)}
        className="ring-ink-900/5 shadow-lift enter absolute -right-3 -bottom-5 flex items-center gap-3 rounded-xl bg-white px-4 py-3 ring-1 sm:-right-6"
      >
        <span className="bg-mint-500/10 text-mint-600 grid h-9 w-9 place-items-center rounded-full text-base">
          <HiCheckCircle />
        </span>
        <div>
          <p className="text-ink-900 text-xs font-bold">{badge.title}</p>
          <p className="text-ink-400 text-[11px]">{badge.detail}</p>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  delta,
  delay: seconds,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  delta: string;
  delay: number;
}) {
  return (
    <div
      style={delay(seconds)}
      className="border-ink-100 enter rounded-xl border p-4"
    >
      <div className="flex items-center justify-between">
        <span className="bg-brand-50 text-brand-600 grid h-8 w-8 place-items-center rounded-lg text-sm">
          {icon}
        </span>
        <span className="text-mint-600 flex items-center gap-1 text-[11px] font-semibold">
          <HiArrowUp /> {delta}
        </span>
      </div>
      <p className="text-ink-400 mt-3 text-[11px] font-medium">{label}</p>
      <p className="text-ink-900 font-display text-xl font-bold tabular-nums">
        {value}
      </p>
    </div>
  );
}
