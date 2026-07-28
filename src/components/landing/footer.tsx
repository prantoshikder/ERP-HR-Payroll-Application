import { siteConfig } from "@/lib/site";
import { Logo } from "./logo";

const columns = [
  {
    title: "Product",
    links: ["Core HR", "Payroll", "Attendance", "Leave", "Performance", "Analytics"],
  },
  {
    title: "Company",
    links: ["About", "Customers", "Careers", "Security", "Partners"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API reference", "Payroll guides", "Changelog", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "DPA", "Sub-processors"],
  },
];

export function Footer() {
  return (
    <footer className="border-ink-200/70 border-t bg-white">
      <div className="shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2.7fr]">
          <div>
            <Logo />
            <p className="text-ink-500 mt-4 max-w-xs text-sm leading-relaxed">
              The ERP that connects people, attendance and money — so payroll
              closes on time, every time.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-ink-900 text-xs font-bold tracking-[0.12em] uppercase">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-ink-500 hover:text-brand-600 text-sm transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-ink-100 mt-12 flex flex-col items-center justify-between gap-4 border-t pt-7 sm:flex-row">
          <p className="text-ink-400 text-xs">
            © {new Date().getFullYear()} {siteConfig.name}. Built by{" "}
            <a
              href={siteConfig.author.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-600 hover:text-brand-600 font-medium transition-colors"
            >
              {siteConfig.author.name}
            </a>
            .
          </p>
          <div className="text-ink-400 flex items-center gap-5 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="bg-mint-500 h-1.5 w-1.5 rounded-full" />
              All systems operational
            </span>
            <span>SOC 2 Type II</span>
            <span>ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
