import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { BackToTop } from "@/components/ui/back-to-top";

/** Chrome shared by every public marketing page. */
export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
