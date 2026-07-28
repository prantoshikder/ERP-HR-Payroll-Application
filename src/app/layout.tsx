import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { AppProviders } from "@/components/providers/app-providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NexusHR — ERP HR & Payroll Platform",
    template: "%s · NexusHR",
  },
  description:
    "Run payroll, attendance, leave, recruitment and compliance for your whole workforce from one ERP. Built for teams from 20 to 20,000.",
  keywords: [
    "HR software",
    "payroll software",
    "ERP",
    "attendance management",
    "leave management",
    "HRMS",
  ],
  openGraph: {
    title: "NexusHR — ERP HR & Payroll Platform",
    description:
      "One platform for payroll, people and compliance. Close payroll in minutes, not weekends.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="text-ink-900 flex min-h-full flex-col bg-white"
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
