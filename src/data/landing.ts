export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Modules", href: "/modules" },
  { label: "Pricing", href: "/pricing" },
  { label: "Security", href: "/security" },
  { label: "About", href: "/about" },
];

export type FooterColumn = {
  title: string;
  links: (NavLink & { external?: boolean })[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Modules", href: "/modules" },
      { label: "Pricing", href: "/pricing" },
      { label: "Security", href: "/security" },
      { label: "How it works", href: "/#how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Customers", href: "/#testimonials" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/pricing#faq" },
      { label: "Book a demo", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Security & compliance", href: "/security" },
    ],
  },
];

export type Feature = {
  key: string;
  title: string;
  description: string;
  points: string[];
  accent: "brand" | "mint" | "amber" | "sky" | "rose" | "violet";
};

export const features: Feature[] = [
  {
    key: "payroll",
    title: "Payroll engine",
    description:
      "Salary structures, arrears, bonuses, overtime and tax — computed in one deterministic run you can audit line by line.",
    points: ["Multi-currency", "Off-cycle runs", "Auto tax slabs"],
    accent: "brand",
  },
  {
    key: "attendance",
    title: "Attendance & shifts",
    description:
      "Biometric, geo-fenced mobile and web punches roll straight into timesheets with rosters, breaks and overtime rules.",
    points: ["Shift rosters", "Geo-fencing", "Overtime rules"],
    accent: "mint",
  },
  {
    key: "leave",
    title: "Leave management",
    description:
      "Configurable policies, accruals, carry-forward and encashment with multi-level approvals that respect your org chart.",
    points: ["Accrual policies", "Approval chains", "Holiday calendars"],
    accent: "sky",
  },
  {
    key: "recruit",
    title: "Recruitment & onboarding",
    description:
      "Requisitions, pipelines, interview scorecards and an onboarding checklist that provisions the new hire on day one.",
    points: ["Job pipelines", "Scorecards", "Digital offers"],
    accent: "violet",
  },
  {
    key: "performance",
    title: "Performance & OKR",
    description:
      "Goal cascades, 360° reviews and appraisal cycles that feed increments back into payroll without a spreadsheet in sight.",
    points: ["360° reviews", "Goal cascade", "Increment sync"],
    accent: "amber",
  },
  {
    key: "compliance",
    title: "Compliance & audit",
    description:
      "Statutory reports, provident fund, income tax and every change on an immutable audit trail your auditor will actually like.",
    points: ["Statutory reports", "Audit trail", "Role-based access"],
    accent: "rose",
  },
];

export type Module = {
  name: string;
  blurb: string;
  tag: string;
};

export const modules: Module[] = [
  {
    name: "Core HR",
    blurb: "Single employee record of truth",
    tag: "Foundation",
  },
  {
    name: "Payroll",
    blurb: "Run, review, disburse, reconcile",
    tag: "Finance",
  },
  {
    name: "Time & Attendance",
    blurb: "Punches, shifts, timesheets",
    tag: "Operations",
  },
  { name: "Leave", blurb: "Policies, accruals, approvals", tag: "Operations" },
  { name: "Recruitment", blurb: "Requisition to offer letter", tag: "Talent" },
  { name: "Onboarding", blurb: "Checklists and asset handover", tag: "Talent" },
  { name: "Performance", blurb: "Goals, OKRs and appraisals", tag: "Talent" },
  {
    name: "Expense & Claims",
    blurb: "Reimbursements into payroll",
    tag: "Finance",
  },
  {
    name: "Asset Register",
    blurb: "Devices issued and returned",
    tag: "Operations",
  },
  {
    name: "Loans & Advances",
    blurb: "Auto-deducted instalments",
    tag: "Finance",
  },
  {
    name: "Employee Self-Service",
    blurb: "Payslips, requests, documents",
    tag: "Foundation",
  },
  {
    name: "Analytics",
    blurb: "Headcount, cost and attrition",
    tag: "Insights",
  },
];

export type Step = {
  step: string;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    step: "01",
    title: "Import your workforce",
    description:
      "Bring employees, salary structures and past payroll history in from Excel or your existing HRMS. Our importer validates every row before it lands.",
  },
  {
    step: "02",
    title: "Configure your rules",
    description:
      "Set pay components, tax slabs, leave policies, shift patterns and approval hierarchies once. NexusHR applies them consistently forever after.",
  },
  {
    step: "03",
    title: "Run and reconcile",
    description:
      "Trigger a payroll run, review the variance report against last month, approve, and push bank files and payslips out in a single click.",
  },
];

export type Plan = {
  name: string;
  tagline: string;
  monthly: number | null;
  yearly: number | null;
  unit: string;
  featured?: boolean;
  cta: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    name: "Starter",
    tagline: "For growing teams putting their first process in place.",
    monthly: 3,
    yearly: 2,
    unit: "per employee / month",
    cta: "Start free trial",
    features: [
      "Up to 50 employees",
      "Core HR + Employee self-service",
      "Payroll runs & payslips",
      "Leave and holiday calendars",
      "Email support",
    ],
  },
  {
    name: "Growth",
    tagline: "For scaling companies that need every HR workflow connected.",
    monthly: 6,
    yearly: 5,
    unit: "per employee / month",
    featured: true,
    cta: "Start free trial",
    features: [
      "Unlimited employees",
      "Everything in Starter",
      "Attendance, shifts & overtime",
      "Recruitment, onboarding & performance",
      "Expense claims, loans & assets",
      "Priority support + onboarding manager",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For multi-entity groups with compliance and audit obligations.",
    monthly: null,
    yearly: null,
    unit: "custom pricing",
    cta: "Talk to sales",
    features: [
      "Multi-entity & multi-currency",
      "SSO, SCIM & granular RBAC",
      "Custom approval workflows",
      "Open API & data warehouse sync",
      "99.9% uptime SLA",
      "Dedicated success engineer",
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Payroll used to eat the last three days of every month. With NexusHR the run takes forty minutes and the variance report catches things we used to find in an audit.",
    name: "Farhana Rahman",
    role: "Head of People",
    company: "Meridian Textiles",
    initials: "FR",
  },
  {
    quote:
      "We moved 2,400 employees across four entities onto one system. The attendance-to-payroll link alone removed an entire reconciliation team's worth of work.",
    name: "Arif Hossain",
    role: "CFO",
    company: "Northline Logistics",
    initials: "AH",
  },
  {
    quote:
      "Our managers approve leave from their phone and it just flows into the payroll cycle. Adoption was the easiest part of the rollout, which never happens.",
    name: "Priya Menon",
    role: "HR Director",
    company: "Calyx Health",
    initials: "PM",
  },
];

export type Stat = { value: string; label: string; sub: string };

export const stats: Stat[] = [
  {
    value: "2.4M+",
    label: "Payslips issued",
    sub: "processed through NexusHR in 2025",
  },
  {
    value: "40 min",
    label: "Average payroll run",
    sub: "down from 3 working days",
  },
  {
    value: "99.98%",
    label: "Calculation accuracy",
    sub: "measured across audited runs",
  },
  { value: "1,200+", label: "Companies onboard", sub: "across 14 countries" },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Can we migrate from our existing HR or payroll system?",
    a: "Yes. Our importer accepts Excel and CSV exports from most HRMS and accounting systems, including mid-year payroll history so year-to-date tax stays correct. A migration specialist validates the first run against your previous system before you go live.",
  },
  {
    q: "How does NexusHR handle country-specific tax and statutory rules?",
    a: "Tax slabs, provident fund, gratuity and social security rules are configured per legal entity and versioned by effective date. When a rule changes mid-year, past runs stay exactly as they were filed while future runs pick up the new rates automatically.",
  },
  {
    q: "Do employees get their own access?",
    a: "Every employee gets self-service on web and mobile: payslips, tax documents, leave balances, attendance regularisation, expense claims and profile updates — all routed through the approval chain you define.",
  },
  {
    q: "Can it integrate with our accounting and banking stack?",
    a: "Payroll journals post to Xero, QuickBooks, Tally and SAP through native connectors, and bank disbursement files are generated in your bank's required format. Anything else can be built on our REST API and webhooks.",
  },
  {
    q: "How is our payroll data secured?",
    a: "Data is encrypted in transit and at rest, access is governed by role-based permissions down to the pay-component level, and every read and write on sensitive records is written to an immutable audit log. We are SOC 2 Type II audited with optional regional data residency.",
  },
  {
    q: "What does implementation look like?",
    a: "A typical 200-employee rollout goes live in two to three weeks: one week for data import and rule configuration, one week for a parallel run against your current system, then cutover. Enterprise multi-entity rollouts are scoped with your success engineer.",
  },
];

export const logos = [
  "Meridian",
  "Northline",
  "Calyx Health",
  "Orbit Foods",
  "Vertex Bank",
  "Lumen Retail",
  "Anchor Group",
  "Skyward",
];
