import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

/** Chrome shared by every public marketing page. */
export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
