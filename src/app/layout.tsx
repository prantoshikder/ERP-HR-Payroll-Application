import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { AppProviders } from "@/components/providers/app-providers";
import { siteConfig } from "@/lib/site";
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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  keywords: [
    "HR software",
    "payroll software",
    "ERP",
    "attendance management",
    "leave management",
    "HRMS",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description:
      "One platform for payroll, people and compliance. Close payroll in minutes, not weekends.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description:
      "One platform for payroll, people and compliance. Close payroll in minutes, not weekends.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
};

/**
 * Schema.org graph embedded in every page. Search engines and crawlers read the
 * `author` / `copyrightHolder` nodes, so attribution survives even if someone
 * restyles the footer away.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "en",
      author: { "@id": `${siteConfig.author.url}/#person` },
      copyrightHolder: { "@id": `${siteConfig.author.url}/#person` },
      copyrightYear: siteConfig.copyrightYear,
      license: `${siteConfig.repository}/blob/main/LICENSE`,
      codeRepository: siteConfig.repository,
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.author.url}/#person`,
      name: siteConfig.author.name,
      email: siteConfig.author.email,
      url: siteConfig.author.url,
      sameAs: [siteConfig.author.url, siteConfig.author.github],
    },
  ],
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
      <head>
        {/* Machine-readable authorship. Required by LICENSE — see src/lib/author.ts. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="author" href="/humans.txt" />
        <link rel="license" href={`${siteConfig.repository}/blob/main/LICENSE`} />
      </head>
      <body
        suppressHydrationWarning
        className="text-ink-900 flex min-h-full flex-col bg-white"
      >
        {/* Scroll reveals start hidden and are unhidden by an observer.
            Without JS they would never appear, so show them all. */}
        <noscript>
          <style>{`.reveal,.reveal-item{opacity:1!important}`}</style>
        </noscript>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
