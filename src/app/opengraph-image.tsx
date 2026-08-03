import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #0f172a 0%, #312e81 60%, #4338ca 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(135deg, #6366f1, #4338ca)",
            }}
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 18V7.5M12 18V4M19 18v-7"
                stroke="white"
                strokeWidth="2.6"
                strokeLinecap="round"
              />
              <circle cx="19" cy="7" r="2.3" fill="#34d399" />
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: 36, fontWeight: 700, color: "white" }}>
            KormoPay
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Close payroll in minutes,
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 800,
              color: "#a5b4fc",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            not weekends
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 30,
              color: "#cbd5e1",
              maxWidth: 900,
            }}
          >
            One ERP for payroll, attendance, leave, recruitment and compliance.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {["Payroll", "Attendance", "Leave", "Recruitment", "Compliance"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#e0e7ff",
                fontSize: 24,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
