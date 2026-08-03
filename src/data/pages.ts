/**
 * Content for the standalone marketing pages. Landing-page content lives in
 * `landing.ts`, values shared by both in `common.ts`; anything a single
 * sub-page owns is defined here so the page components stay layout-only.
 */

import { contactEmails } from "./common";

/* ------------------------------------------------------------------ features */

export type FeatureDeepDive = {
  key: string;
  eyebrow: string;
  title: string;
  description: string;
  capabilities: string[];
  metric: { value: string; label: string };
};

export const featureDeepDives: FeatureDeepDive[] = [
  {
    key: "payroll",
    eyebrow: "Payroll engine",
    title: "A payroll run you can defend line by line",
    description:
      "Every component — basic, allowances, arrears, overtime, loan instalments, tax — is calculated from versioned rules and stored with the run. Re-open a run from eleven months ago and it still shows the exact inputs that produced each payslip.",
    capabilities: [
      "Variance report against the previous cycle before you approve",
      "Off-cycle and correction runs without touching the closed period",
      "Bank disbursement files in your bank's required format",
      "Journal entries posted straight to your accounting ledger",
      "Multi-entity, multi-currency and multi-country tax slabs",
    ],
    metric: { value: "40 min", label: "average run for 500 employees" },
  },
  {
    key: "attendance",
    eyebrow: "Attendance & shifts",
    title: "Time data that lands in payroll without re-keying",
    description:
      "Biometric devices, geo-fenced mobile punches and web check-ins feed one timesheet. Rosters, breaks, late rules and overtime multipliers are applied as the punches arrive, so month-end is a review rather than a reconstruction.",
    capabilities: [
      "Rotating, split and night shift rosters with auto-assignment",
      "Geo-fenced and IP-restricted punches for field and office teams",
      "Regularisation requests routed through the approval chain",
      "Overtime multipliers by day type, shift and employee grade",
      "Device sync with retry and duplicate-punch protection",
    ],
    metric: { value: "0", label: "spreadsheets between punch and payslip" },
  },
  {
    key: "leave",
    eyebrow: "Leave & absence",
    title: "Policies that accrue, expire and encash on their own",
    description:
      "Define the policy once — accrual frequency, probation rules, carry-forward caps, encashment — and KormoPay applies it to every employee on schedule. Balances update the moment an approval lands, and payroll reads the same numbers.",
    capabilities: [
      "Monthly, quarterly and anniversary accrual schedules",
      "Carry-forward caps with automatic year-end expiry",
      "Multi-level approvals that follow your live org chart",
      "Location-specific holiday calendars and optional holidays",
      "Loss-of-pay days flowing straight into the payroll run",
    ],
    metric: { value: "1 record", label: "shared by leave, attendance and pay" },
  },
  {
    key: "recruit",
    eyebrow: "Recruitment & onboarding",
    title: "From requisition to a fully provisioned first day",
    description:
      "Approved requisitions become job pipelines, pipelines become scorecards, and an accepted offer becomes an employee record — with the onboarding checklist, asset assignment and payroll setup already in motion.",
    capabilities: [
      "Requisition approvals tied to budgeted headcount",
      "Stage-based pipelines with interview scorecards",
      "Digital offer letters with e-signature and audit trail",
      "Onboarding checklists across HR, IT and finance",
      "Candidate data promoted to the employee record on join",
    ],
    metric: { value: "Day 1", label: "assets, access and payroll ready" },
  },
  {
    key: "performance",
    eyebrow: "Performance & OKR",
    title: "Reviews that actually change what people are paid",
    description:
      "Cascade goals from company to team to individual, run 360° cycles on a schedule, and push the resulting increment straight into the next payroll run with an effective date — no spreadsheet handover, no transcription error.",
    capabilities: [
      "Goal cascades with weightage and quarterly check-ins",
      "360° feedback from managers, peers and reports",
      "Calibration view across a department before sign-off",
      "Increment and promotion letters generated from the outcome",
      "Approved increments synced to payroll by effective date",
    ],
    metric: { value: "1 click", label: "from appraisal outcome to payroll" },
  },
  {
    key: "compliance",
    eyebrow: "Compliance & audit",
    title: "Every number traceable to the change that caused it",
    description:
      "Statutory filings, provident fund, gratuity and income tax reports are generated from the same data that produced the payslips. Every read and write on a sensitive record is written to an append-only log your auditor can query.",
    capabilities: [
      "Statutory reports generated per legal entity",
      "Immutable audit log with actor, timestamp and before/after",
      "Role-based access down to the pay-component level",
      "Effective-dated rule versions so filed runs never change",
      "Retention and data-residency controls per region",
    ],
    metric: { value: "SOC 2", label: "Type II audited controls" },
  },
];

/* ------------------------------------------------------------------- modules */

export type ModuleGroup = {
  tag: string;
  title: string;
  description: string;
};

export const moduleGroups: ModuleGroup[] = [
  {
    tag: "Foundation",
    title: "The record everything else reads from",
    description:
      "One employee profile with contract history, documents and org placement. Turn this on first — every other module writes back to it.",
  },
  {
    tag: "Finance",
    title: "Money that moves on a schedule",
    description:
      "Payroll, claims, loans and advances share one set of pay components, so a reimbursement approved on the 20th is on the payslip on the 30th.",
  },
  {
    tag: "Operations",
    title: "The day-to-day of who worked when",
    description:
      "Attendance, leave and assets — the modules your line managers live in, built to be usable from a phone on a factory floor.",
  },
  {
    tag: "Talent",
    title: "Hiring, growing and keeping people",
    description:
      "Recruitment through performance, connected so that an offer, a confirmation and an increment all land on the same timeline.",
  },
  {
    tag: "Insights",
    title: "Numbers leadership actually asks for",
    description:
      "Headcount, cost-to-company, attrition and overtime trends, sliced by entity, department or location — refreshed off live payroll data.",
  },
];

export type Integration = { name: string; category: string };

export const integrations: Integration[] = [
  { name: "Xero", category: "Accounting" },
  { name: "QuickBooks", category: "Accounting" },
  { name: "Tally", category: "Accounting" },
  { name: "SAP", category: "ERP" },
  { name: "Okta", category: "Identity" },
  { name: "Azure AD", category: "Identity" },
  { name: "Slack", category: "Collaboration" },
  { name: "Google Workspace", category: "Collaboration" },
  { name: "ZKTeco", category: "Biometrics" },
  { name: "Suprema", category: "Biometrics" },
  { name: "Stripe", category: "Payments" },
  { name: "REST API", category: "Custom" },
];

/* ------------------------------------------------------------------- pricing */

export type MatrixRow = {
  label: string;
  starter: string | boolean;
  growth: string | boolean;
  enterprise: string | boolean;
};

export type MatrixSection = { section: string; rows: MatrixRow[] };

export const planMatrix: MatrixSection[] = [
  {
    section: "Core HR",
    rows: [
      { label: "Employees", starter: "Up to 50", growth: "Unlimited", enterprise: "Unlimited" },
      { label: "Employee self-service", starter: true, growth: true, enterprise: true },
      { label: "Document vault & e-signature", starter: true, growth: true, enterprise: true },
      { label: "Org chart & multi-entity", starter: false, growth: "Up to 3 entities", enterprise: "Unlimited" },
    ],
  },
  {
    section: "Payroll",
    rows: [
      { label: "Payroll runs & payslips", starter: true, growth: true, enterprise: true },
      { label: "Off-cycle & correction runs", starter: false, growth: true, enterprise: true },
      { label: "Bank files & accounting journals", starter: "Bank files only", growth: true, enterprise: true },
      { label: "Multi-currency payroll", starter: false, growth: false, enterprise: true },
    ],
  },
  {
    section: "Time & talent",
    rows: [
      { label: "Leave & holiday calendars", starter: true, growth: true, enterprise: true },
      { label: "Attendance, shifts & overtime", starter: false, growth: true, enterprise: true },
      { label: "Recruitment & onboarding", starter: false, growth: true, enterprise: true },
      { label: "Performance & OKR", starter: false, growth: true, enterprise: true },
    ],
  },
  {
    section: "Platform",
    rows: [
      { label: "REST API & webhooks", starter: "Read-only", growth: true, enterprise: true },
      { label: "SSO, SCIM & granular RBAC", starter: false, growth: "SSO only", enterprise: true },
      { label: "Audit log retention", starter: "12 months", growth: "3 years", enterprise: "Custom" },
      { label: "Uptime SLA", starter: false, growth: "99.5%", enterprise: "99.9%" },
      { label: "Support", starter: "Email", growth: "Priority + onboarding manager", enterprise: "Dedicated success engineer" },
    ],
  },
];

/* --------------------------------------------------------------------- about */

export type Value = { title: string; description: string };

export const values: Value[] = [
  {
    title: "Correct beats clever",
    description:
      "Payroll is arithmetic people plan their lives around. We would rather ship a boring calculation that reconciles to the cent than a smart one that mostly does.",
  },
  {
    title: "One record, no copies",
    description:
      "Every duplicate of an employee record is a future discrepancy. Modules read and write the same row, which is why attendance and payroll never disagree.",
  },
  {
    title: "Auditable by default",
    description:
      "Nothing changes silently. Who changed it, when, and what it was before is written down before the change is applied, not reconstructed afterwards.",
  },
  {
    title: "Built with HR, not at them",
    description:
      "Our roadmap comes from payroll officers who close real cycles under real deadlines. If a workflow needs a training video, we treat that as a bug.",
  },
];

export type Milestone = { year: string; title: string; description: string };

export const milestones: Milestone[] = [
  {
    year: "2021",
    title: "Started inside a payroll team",
    description:
      "Built as an internal tool for a 900-person manufacturing group that was closing payroll across four spreadsheets and two systems.",
  },
  {
    year: "2022",
    title: "First external customers",
    description:
      "Twelve companies moved off legacy HRMS installs. Attendance and leave shipped because every one of them asked for the same reconciliation.",
  },
  {
    year: "2023",
    title: "Multi-entity and compliance",
    description:
      "Effective-dated rule versioning, statutory reporting and the immutable audit log landed — the release that made us usable by regulated groups.",
  },
  {
    year: "2024",
    title: "SOC 2 Type II",
    description:
      "Completed our first Type II observation window, added SSO and SCIM, and opened regional data residency for customers who needed it.",
  },
  {
    year: "2026",
    title: "1,200 companies, 14 countries",
    description:
      "2.4M payslips issued last year, with the average payroll run down from three working days to forty minutes.",
  },
];

export type Leader = { name: string; role: string; bio: string; initials: string };

export const leadership: Leader[] = [
  {
    name: "Pranto Shikder",
    role: "Founder & CEO",
    bio: "Spent six years building payroll and ERP systems before starting KormoPay. Still reviews every calculation change.",
    initials: "PS",
  },
  {
    name: "Ayesha Karim",
    role: "VP, Product",
    bio: "Former head of HR operations for a 5,000-person retail group. Turns closing-cycle pain into roadmap items.",
    initials: "AK",
  },
  {
    name: "Daniyal Rahman",
    role: "VP, Engineering",
    bio: "Distributed systems engineer. Owns the payroll engine's determinism and the audit log that backs it.",
    initials: "DR",
  },
  {
    name: "Nusrat Jahan",
    role: "Head of Compliance",
    bio: "Chartered accountant who maintains our statutory rule library across the countries we operate in.",
    initials: "NJ",
  },
];

/* ------------------------------------------------------------------- careers */

export type Role = {
  title: string;
  team: string;
  location: string;
  type: string;
};

export const openRoles: Role[] = [
  { title: "Senior Backend Engineer, Payroll Engine", team: "Engineering", location: "Dhaka / Remote", type: "Full-time" },
  { title: "Frontend Engineer, Web Platform", team: "Engineering", location: "Remote (GMT+4 to GMT+8)", type: "Full-time" },
  { title: "Product Designer", team: "Design", location: "Dhaka / Hybrid", type: "Full-time" },
  { title: "Implementation Consultant", team: "Customer Success", location: "Dubai", type: "Full-time" },
  { title: "Payroll Compliance Analyst", team: "Compliance", location: "Remote", type: "Full-time" },
  { title: "Account Executive, Mid-Market", team: "Sales", location: "Singapore", type: "Full-time" },
  { title: "Technical Support Engineer", team: "Support", location: "Dhaka", type: "Full-time" },
  { title: "Engineering Intern, Platform", team: "Engineering", location: "Dhaka", type: "Internship" },
];

export type Perk = { title: string; description: string };

export const perks: Perk[] = [
  {
    title: "Remote-first, meeting-light",
    description:
      "Two overlapping hours a day, everything else written down. Most engineers ship without a single scheduled call.",
  },
  {
    title: "Paid on time, obviously",
    description:
      "We build payroll software. Salaries land on the 28th, and every component is visible on your own KormoPay self-service.",
  },
  {
    title: "Health cover for the household",
    description:
      "Medical insurance for you, a partner and up to two dependents, from your first day rather than after probation.",
  },
  {
    title: "Learning budget",
    description:
      "An annual budget for courses, conferences and books, plus one Friday a month reserved for whatever you want to learn.",
  },
  {
    title: "Real time off",
    description:
      "25 days of leave, a mandatory minimum of ten, and no expectation of being reachable while you are on it.",
  },
  {
    title: "Ownership from year one",
    description:
      "Equity for every full-time role, with a plain-language explanation of what it is actually worth before you sign.",
  },
];

/* ------------------------------------------------------------------ security */

export type PracticeGroup = {
  title: string;
  description: string;
  items: string[];
};

export const practiceGroups: PracticeGroup[] = [
  {
    title: "Data protection",
    description: "How payroll data is stored, moved and isolated.",
    items: [
      "TLS 1.2+ in transit; AES-256 at rest for databases, backups and file storage",
      "Per-tenant logical isolation with row-level enforcement on every query path",
      "Optional regional data residency for EU, GCC and APAC customers",
      "Encrypted daily backups with quarterly restore testing",
    ],
  },
  {
    title: "Access control",
    description: "Who can see a salary figure, and how that is proven.",
    items: [
      "Role-based permissions down to the individual pay component",
      "SSO via SAML and OIDC, with SCIM provisioning and deprovisioning",
      "Mandatory MFA for all KormoPay staff accounts and admin consoles",
      "Just-in-time, time-boxed and logged production access for support cases",
    ],
  },
  {
    title: "Application security",
    description: "How the code that touches your data is built and checked.",
    items: [
      "Peer review and automated dependency scanning on every change",
      "Annual third-party penetration test with summary reports on request",
      "Static analysis and secret scanning enforced in CI",
      "Responsible disclosure programme with a 72-hour first response",
    ],
  },
  {
    title: "Availability & response",
    description: "What happens when something goes wrong.",
    items: [
      "99.9% uptime SLA on Enterprise, with a public status page",
      "Multi-AZ deployment with automated failover and point-in-time recovery",
      "Documented incident response with customer notification within 24 hours",
      "Business continuity and disaster recovery plans tested annually",
    ],
  },
];

export type Certification = { name: string; detail: string };

/** Commitments quoted in the vulnerability-disclosure band on /security. */
export const disclosureFacts = [
  { label: "First response", value: "Within 72 hours" },
  {
    label: "Customer notification",
    value: "Within 24 hours of a confirmed incident",
  },
];

export const certifications: Certification[] = [
  { name: "SOC 2 Type II", detail: "Audited annually across security, availability and confidentiality." },
  { name: "ISO 27001", detail: "Information security management system certified and surveilled." },
  { name: "GDPR", detail: "DPA and sub-processor list available; EU data residency on request." },
  { name: "Penetration tested", detail: "Independent annual test with remediation tracked to closure." },
];

/* ------------------------------------------------------------------- contact */

export type ContactChannel = {
  title: string;
  description: string;
  email: string;
  response: string;
};

export const contactChannels: ContactChannel[] = [
  {
    title: "Talk to sales",
    description: "Pricing, migration scoping and a walkthrough against your own payroll rules.",
    email: contactEmails.sales,
    response: "Replies within one business day",
  },
  {
    title: "Customer support",
    description: "For existing customers with a question about a run, a policy or an import.",
    email: contactEmails.support,
    response: "Priority queue for Growth and Enterprise",
  },
  {
    title: "Security & compliance",
    description: "Vendor assessments, DPAs, sub-processor lists and disclosure reports.",
    email: contactEmails.security,
    response: "First response within 72 hours",
  },
];

export type Office = { city: string; lines: string[] };

export const offices: Office[] = [
  { city: "Dhaka", lines: ["Level 8, Bay's Galleria", "Gulshan 1, Dhaka 1212", "Bangladesh"] },
  { city: "Singapore", lines: ["68 Circular Road, #02-01", "Singapore 049422"] },
  { city: "Dubai", lines: ["Office 1204, One Central", "Trade Centre, Dubai", "United Arab Emirates"] },
];

export const enquiryTopics = [
  "Product demo",
  "Pricing & plans",
  "Migration from another system",
  "Security review",
  "Partnership",
  "Something else",
];

export const companySizes = ["1-50", "51-200", "201-1,000", "1,000+"];

/* --------------------------------------------------------------------- legal */

export type LegalSection = { id: string; heading: string; body: string[] };

export const legalUpdatedAt = "1 August 2026";

export const privacySections: LegalSection[] = [
  {
    id: "who-we-are",
    heading: "Who we are",
    body: [
      "KormoPay provides HR and payroll software to employers. This policy explains what we do with personal data when you visit our website, evaluate the product, or use it as a customer.",
      "When an employer uses KormoPay to run payroll, that employer is the controller of their employees' data and we act as a processor on their instructions. Our agreement with them, not this policy, governs that data.",
    ],
  },
  {
    id: "what-we-collect",
    heading: "What we collect",
    body: [
      "Contact details you give us — name, work email, company, phone number and anything you type into a demo or contact form.",
      "Account data if you become a customer, including your users' names, roles and authentication identifiers.",
      "Usage data such as pages viewed, features used, browser type and approximate location derived from IP address.",
      "Employee data uploaded by a customer into their workspace. We only process this to provide the service.",
    ],
  },
  {
    id: "how-we-use-it",
    heading: "How we use it",
    body: [
      "To provide, secure and support the service, including running payroll calculations and generating the documents you ask for.",
      "To respond to enquiries, arrange demos and send service messages about your account.",
      "To improve the product using aggregated usage patterns. We do not use customer payroll data to train models.",
      "To meet legal, tax and audit obligations that apply to us as a company.",
    ],
  },
  {
    id: "legal-bases",
    heading: "Legal bases",
    body: [
      "Where GDPR applies, we rely on: performance of a contract for account and service data; legitimate interests for product improvement and security; consent for marketing email, which you can withdraw at any time; and legal obligation where a law requires us to retain records.",
    ],
  },
  {
    id: "sharing",
    heading: "Sharing and sub-processors",
    body: [
      "We use vetted sub-processors for hosting, email delivery, error monitoring and payment processing. A current list is available on request and is maintained as an annex to our DPA.",
      "We do not sell personal data. We disclose it only to sub-processors under contract, to a customer's own authorised administrators, or where legally compelled.",
    ],
  },
  {
    id: "retention",
    heading: "Retention",
    body: [
      "Marketing and enquiry data is kept for 24 months from your last interaction unless you ask us to delete it sooner.",
      "Customer workspace data is retained for the life of the subscription and deleted within 90 days of termination, except where a statutory retention period requires us to keep payroll records for longer.",
      "Audit logs are retained according to the plan on your contract.",
    ],
  },
  {
    id: "your-rights",
    heading: "Your rights",
    body: [
      "Depending on where you live, you may have the right to access, correct, delete, port or restrict the processing of your personal data, and to object to processing based on legitimate interests.",
      "If your data sits in an employer's KormoPay workspace, ask your employer first — we will refer your request to them as the controller.",
      `To exercise a right in relation to data we control, email ${contactEmails.privacy}. We respond within 30 days.`,
    ],
  },
  {
    id: "transfers",
    heading: "International transfers",
    body: [
      "Data may be processed in a region other than your own. Where it is, we rely on standard contractual clauses or an adequacy decision, and Enterprise customers can pin their workspace to a specific region.",
    ],
  },
  {
    id: "cookies",
    heading: "Cookies",
    body: [
      "We use strictly necessary cookies for session handling and security, and analytics cookies to understand which pages are useful. Analytics cookies are only set with consent where that is required.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    body: [
      "We will post any material change on this page and, for customers, give notice through the product or by email before the change takes effect.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    id: "agreement",
    heading: "The agreement",
    body: [
      "These terms govern your use of the KormoPay website and, unless a signed order form or master services agreement says otherwise, the KormoPay service.",
      "Where a signed agreement exists between you and KormoPay, that agreement takes precedence over these terms for the subject matter it covers.",
    ],
  },
  {
    id: "accounts",
    heading: "Accounts and access",
    body: [
      "You are responsible for the accuracy of your account details, for keeping credentials confidential, and for what your authorised users do with the service.",
      "Administrators can grant and revoke access within their workspace. Tell us immediately if you believe an account has been compromised.",
    ],
  },
  {
    id: "acceptable-use",
    heading: "Acceptable use",
    body: [
      "Do not use the service to break the law, infringe someone else's rights, upload malicious code, probe or load-test our infrastructure without written permission, or resell access without an agreement that permits it.",
      "We may suspend access where continued use poses a security risk or a legal exposure, and will tell you why as soon as we reasonably can.",
    ],
  },
  {
    id: "your-data",
    heading: "Your data",
    body: [
      "You keep all rights in the data you upload. You grant us a limited licence to host, process and transmit it strictly to provide the service and support you.",
      "You are responsible for having a lawful basis to upload employee data and for the accuracy of the payroll inputs you configure.",
      "We do not use customer data to train machine learning models or to build products for other customers.",
    ],
  },
  {
    id: "fees",
    heading: "Fees and billing",
    body: [
      "Subscription fees are billed in advance per billing cycle based on active employee count, unless your order form says otherwise.",
      "Fees are non-refundable except where required by law or expressly stated in your agreement. Late payment may lead to suspension after written notice.",
      "We may change list pricing with 30 days' notice; changes take effect at your next renewal, not mid-term.",
    ],
  },
  {
    id: "availability",
    heading: "Availability and support",
    body: [
      "We aim to keep the service available at all times and publish uptime on our status page. Enterprise plans carry a contractual 99.9% SLA with service credits.",
      "Planned maintenance is announced in advance and scheduled outside peak payroll windows wherever possible.",
    ],
  },
  {
    id: "no-advice",
    heading: "No legal or tax advice",
    body: [
      "KormoPay provides software, not legal, tax or accounting advice. Statutory rules shipped with the product are maintained in good faith, but you remain responsible for your own filings and for confirming that configured rules match your obligations.",
    ],
  },
  {
    id: "liability",
    heading: "Warranties and liability",
    body: [
      "The service is provided as described in the documentation. To the extent permitted by law, we disclaim implied warranties not expressly stated in your agreement.",
      "Neither party is liable for indirect or consequential loss. Our aggregate liability is capped at the fees you paid in the twelve months before the event giving rise to the claim.",
    ],
  },
  {
    id: "term",
    heading: "Term and termination",
    body: [
      "Either party may terminate at the end of a billing cycle with written notice, or immediately for a material breach that is not cured within 30 days.",
      "On termination you can export your data for 30 days. After 90 days we delete it, subject to any statutory retention we are required to observe.",
    ],
  },
  {
    id: "contact",
    heading: "Contact",
    body: [
      `Questions about these terms can be sent to ${contactEmails.legal}, or through the contact page.`,
    ],
  },
];
