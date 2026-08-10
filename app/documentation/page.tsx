import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const navigation = [
  {
    title: "GETTING STARTED",
    items: [
      { label: "Overview", href: "#overview" },
      { label: "Platform Concepts", href: "#platform-concepts" },
      { label: "Organization Setup", href: "#organization-setup" },
      { label: "Users & Roles", href: "#users-roles" },
      { label: "First Compliance Program", href: "#first-compliance-program" },
    ],
  },
  {
    title: "GOVERNANCE",
    items: [
      { label: "Organization", href: "#governance" },
      { label: "Departments", href: "#governance" },
      { label: "Processes", href: "#governance" },
      { label: "Policies", href: "#governance" },
      { label: "Responsibilities", href: "#governance" },
    ],
  },
  {
    title: "COMPLIANCE",
    items: [
      { label: "Standards", href: "#compliance" },
      { label: "Standard Versions", href: "#compliance" },
      { label: "Clauses & Requirements", href: "#compliance" },
      { label: "Controls", href: "#compliance" },
      { label: "Compliance Matrix", href: "#compliance" },
      { label: "Control Coverage", href: "#compliance" },
    ],
  },
  {
    title: "RISK INTELLIGENCE",
    items: [
      { label: "Risk Management", href: "#risk-intelligence" },
      { label: "Risk Assessment", href: "#risk-intelligence" },
      { label: "Risk Scoring", href: "#risk-intelligence" },
      { label: "Risk Exposure", href: "#risk-intelligence" },
      { label: "Risk Treatment", href: "#risk-intelligence" },
    ],
  },
  {
    title: "EVIDENCE",
    items: [
      { label: "Evidence Library", href: "#evidence" },
      { label: "Evidence Collection", href: "#evidence" },
      { label: "Evidence Review", href: "#evidence" },
      { label: "Evidence Approval", href: "#evidence" },
      { label: "Evidence Versioning", href: "#evidence" },
    ],
  },
  {
    title: "EXECUTION",
    items: [
      { label: "Tasks", href: "#execution" },
      { label: "Remediation", href: "#execution" },
      { label: "Findings", href: "#execution" },
      { label: "Corrective Actions", href: "#execution" },
      { label: "Due Dates & Ownership", href: "#execution" },
    ],
  },
  {
    title: "AUDIT",
    items: [
      { label: "Audit Management", href: "#audit" },
      { label: "Audit Programs", href: "#audit" },
      { label: "Audit Evidence", href: "#audit" },
      { label: "Findings", href: "#audit" },
      { label: "Audit Readiness", href: "#audit" },
    ],
  },
  {
    title: "INTELLIGENCE",
    items: [
      { label: "Compliance Health", href: "#intelligence" },
      { label: "Coverage Intelligence", href: "#intelligence" },
      { label: "Gap Intelligence", href: "#intelligence" },
      { label: "Executive Readiness", href: "#intelligence" },
      { label: "Executive Intelligence", href: "#intelligence" },
      { label: "AI Recommendations", href: "#intelligence" },
    ],
  },
  {
    title: "ADMINISTRATION",
    items: [
      { label: "Users", href: "#administration" },
      { label: "Roles", href: "#administration" },
      { label: "Permissions", href: "#administration" },
      { label: "Scopes", href: "#administration" },
      { label: "Activity & Audit", href: "#administration" },
      { label: "Organization Settings", href: "#administration" },
    ],
  },
  {
    title: "INTEGRATIONS",
    items: [
      { label: "API", href: "#integrations" },
      { label: "Webhooks", href: "#integrations" },
      { label: "External Systems", href: "#integrations" },
      { label: "Data Import / Export", href: "#integrations" },
    ],
  },
];

const modules = [
  {
    title: "Compliance Matrix",
    description:
      "Connect standards, clauses, requirements and controls within a structured compliance model.",
    href: "#compliance",
  },
  {
    title: "Risk Intelligence",
    description:
      "Assess risk exposure, scoring, treatment and relationships between risks and controls.",
    href: "#risk-intelligence",
  },
  {
    title: "Evidence Management",
    description:
      "Collect, review, approve and connect evidence to compliance controls.",
    href: "#evidence",
  },
  {
    title: "Tasks & Remediation",
    description:
      "Convert risks and compliance gaps into accountable actions and remediation workflows.",
    href: "#execution",
  },
  {
    title: "Audit Management",
    description:
      "Prepare audit programs, manage evidence and maintain continuous audit readiness.",
    href: "#audit",
  },
  {
    title: "Executive Intelligence",
    description:
      "Transform operational compliance data into health, readiness and executive priorities.",
    href: "#intelligence",
  },
];

export default function DocumentationPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-950">
        {/* HERO */}
        <section className="border-b border-slate-200 bg-slate-50 pt-32">
          <div className="container py-20">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Documentation
            </span>

            <h1 className="mt-5 max-w-5xl text-5xl font-black tracking-tight md:text-6xl">
              ComplianceOS Documentation
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Everything you need to configure, operate and understand the
              ComplianceOS platform.
            </p>

            <div className="mt-10 max-w-2xl">
              <div className="flex items-center rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <span className="mr-4 text-slate-400">⌕</span>

                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>
        </section>

        {/* DOCUMENTATION */}
        <section className="container py-20">
          <div className="grid gap-16 lg:grid-cols-[260px_1fr]">
            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <div className="max-h-[calc(100vh-150px)] overflow-y-auto border-l border-slate-200 pl-5 pr-3">
                {navigation.map((group) => (
                  <div key={group.title} className="mb-8">
                    <p className="mb-3 text-xs font-bold tracking-[0.18em] text-slate-400">
                      {group.title}
                    </p>

                    <ul className="space-y-2">
                      {group.items.map((item, index) => (
                        <li key={`${group.title}-${item.label}`}>
                          <Link
                            href={item.href}
                            className={`block text-sm leading-6 transition ${
                              group.title === "GETTING STARTED" &&
                              index === 0
                                ? "font-semibold text-blue-600"
                                : "text-slate-600 hover:text-blue-600"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </aside>

            {/* CONTENT */}
            <div className="max-w-5xl">
              {/* OVERVIEW */}
              <section
                id="overview"
                className="scroll-mt-28 border-b border-slate-200 pb-12"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Getting Started
                </p>

                <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                  Start with the ComplianceOS operating model.
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                  ComplianceOS connects your organization, standards,
                  requirements, controls, risks, evidence and remediation into
                  one continuous compliance operating model.
                </p>
              </section>

              {/* PLATFORM CONCEPTS */}
              <section
                id="platform-concepts"
                className="scroll-mt-28 border-b border-slate-200 py-12"
              >
                <h3 className="text-2xl font-bold">Platform Concepts</h3>

                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                  The platform is organized around connected governance,
                  compliance, risk, evidence and execution objects rather than
                  isolated registers.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {[
                    ["Organization", "Defines the organizational context."],
                    [
                      "Standards",
                      "Defines applicable frameworks and requirements.",
                    ],
                    [
                      "Controls",
                      "Defines how requirements are operationalized.",
                    ],
                    ["Risks", "Defines exposure and potential impact."],
                    [
                      "Evidence",
                      "Provides proof of control implementation.",
                    ],
                    [
                      "Tasks",
                      "Turns identified issues into accountable actions.",
                    ],
                  ].map(([title, description]) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-slate-200 p-6"
                    >
                      <h4 className="font-bold text-slate-900">{title}</h4>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ORGANIZATION */}
              <section
                id="organization-setup"
                className="scroll-mt-28 border-b border-slate-200 py-12"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Organization
                </p>

                <h3 className="mt-4 text-3xl font-black">
                  Establish your organizational context.
                </h3>

                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                  Configure the organizational structure that will provide
                  context for users, responsibilities, compliance scopes,
                  processes and operational ownership.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {["Organization Setup", "Departments", "Processes"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-200 p-6"
                      >
                        <h4 className="font-semibold text-slate-900">
                          {item}
                        </h4>
                      </div>
                    ),
                  )}
                </div>
              </section>

              {/* USERS */}
              <section
                id="users-roles"
                className="scroll-mt-28 border-b border-slate-200 py-12"
              >
                <h3 className="text-3xl font-black">
                  Users, roles and responsibilities.
                </h3>

                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                  Define who can access the platform, which responsibilities
                  they hold and which organizational areas they can operate
                  within.
                </p>
              </section>

              {/* COMPLIANCE */}
              <section
                id="compliance"
                className="scroll-mt-28 border-b border-slate-200 py-12"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Compliance
                </p>

                <h3 className="mt-4 text-3xl font-black">
                  Build the compliance model.
                </h3>

                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                  Standards are translated into clauses, requirements and
                  controls that can be assigned, assessed, evidenced and
                  monitored.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-950 p-8 text-white">
                  <div className="grid gap-3 md:grid-cols-5 md:items-center">
                    {[
                      "Standards",
                      "Requirements",
                      "Controls",
                      "Evidence",
                      "Coverage",
                    ].map((item, index) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-4 text-center">
                          <span className="text-xs font-medium">{item}</span>
                        </div>

                        {index < 4 && (
                          <span className="hidden text-blue-400 md:block">
                            →
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* RISK */}
              <section
                id="risk-intelligence"
                className="scroll-mt-28 border-b border-slate-200 py-12"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Risk Intelligence
                </p>

                <h3 className="mt-4 text-3xl font-black">
                  Understand and manage exposure.
                </h3>

                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                  Risk intelligence connects risk assessment, scoring,
                  exposure, controls and treatment activities into a
                  continuously monitored risk model.
                </p>
              </section>

              {/* EVIDENCE */}
              <section
                id="evidence"
                className="scroll-mt-28 border-b border-slate-200 py-12"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Evidence
                </p>

                <h3 className="mt-4 text-3xl font-black">
                  Manage the evidence lifecycle.
                </h3>

                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                  Evidence can be collected, reviewed, approved, rejected,
                  versioned and connected to the controls it supports.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-5">
                  {["Collect", "Review", "Approve", "Version", "Link"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-200 p-5 text-center"
                      >
                        <span className="text-sm font-semibold text-slate-900">
                          {item}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </section>

              {/* EXECUTION */}
              <section
                id="execution"
                className="scroll-mt-28 border-b border-slate-200 py-12"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Execution
                </p>

                <h3 className="mt-4 text-3xl font-black">
                  Turn intelligence into action.
                </h3>

                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                  Compliance gaps, risks and findings can be transformed into
                  accountable tasks with owners, priorities and due dates.
                </p>
              </section>

              {/* AUDIT */}
              <section
                id="audit"
                className="scroll-mt-28 border-b border-slate-200 py-12"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Audit
                </p>

                <h3 className="mt-4 text-3xl font-black">
                  Maintain continuous audit readiness.
                </h3>

                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                  Connect audit programs, evidence, findings and remediation
                  activities so the organization can maintain a continuously
                  visible state of audit readiness.
                </p>
              </section>

              {/* INTELLIGENCE */}
              <section
                id="intelligence"
                className="scroll-mt-28 border-b border-slate-200 py-12"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Intelligence
                </p>

                <h3 className="mt-4 text-3xl font-black">
                  From compliance data to executive intelligence.
                </h3>

                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                  ComplianceOS brings together risk, coverage, evidence, gaps
                  and execution data to provide a decision-ready view of
                  compliance health and organizational readiness.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {[
                    "Compliance Health",
                    "Coverage Intelligence",
                    "Gap Intelligence",
                    "Executive Readiness",
                    "Executive Intelligence",
                    "AI Recommendations",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 p-6"
                    >
                      <h4 className="font-semibold text-slate-900">{item}</h4>
                    </div>
                  ))}
                </div>
              </section>

              {/* ADMINISTRATION */}
              <section
                id="administration"
                className="scroll-mt-28 border-b border-slate-200 py-12"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Administration
                </p>

                <h3 className="mt-4 text-3xl font-black">
                  Control access and organizational scope.
                </h3>

                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                  Administration defines how users, roles, permissions,
                  scopes, organizational settings and activity records are
                  governed across the platform.
                </p>
              </section>

              {/* INTEGRATIONS */}
              <section id="integrations" className="scroll-mt-28 py-12">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Integrations
                </p>

                <h3 className="mt-4 text-3xl font-black">
                  Connect ComplianceOS with your ecosystem.
                </h3>

                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                  Integrate ComplianceOS with external systems through APIs,
                  webhooks and structured data exchange.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {[
                    "API",
                    "Webhooks",
                    "External Systems",
                    "Data Import / Export",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 p-6"
                    >
                      <h4 className="font-semibold text-slate-900">{item}</h4>
                    </div>
                  ))}
                </div>
              </section>

              {/* MODULES */}
              <section className="border-t border-slate-200 py-12">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Platform Modules
                </p>

                <h3 className="mt-4 text-3xl font-black">
                  Explore the platform.
                </h3>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  {modules.map((module) => (
                    <Link
                      key={module.title}
                      href={module.href}
                      className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                    >
                      <h4 className="text-xl font-bold text-slate-900">
                        {module.title}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {module.description}
                      </p>

                      <span className="mt-5 inline-block text-sm font-semibold text-blue-600">
                        View section →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* SUPPORT */}
              <section className="mt-6 rounded-3xl bg-slate-50 p-8">
                <h3 className="text-2xl font-bold">Need help?</h3>

                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  If you need assistance understanding the platform or
                  configuring your compliance operating model, our support
                  team can help.
                </p>

                <Link
                  href="/support"
                  className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Visit Support →
                </Link>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
