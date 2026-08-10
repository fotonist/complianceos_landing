import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const solutions = [
  {
    number: "01",
    title: "Governance",
    description:
      "Establish a structured governance foundation for standards, requirements, controls, policies and organizational responsibilities.",
    capabilities: [
      "Standards & Framework Management",
      "Compliance Matrix",
      "Requirements & Controls",
      "Policy Management",
      "Process Governance",
    ],
  },
  {
    number: "02",
    title: "Risk Management",
    description:
      "Identify, assess and prioritize enterprise risks while connecting risk exposure directly to controls, processes and remediation.",
    capabilities: [
      "Risk Register",
      "Risk Assessment & Scoring",
      "Risk Exposure Intelligence",
      "Risk → Control Mapping",
      "Risk Appetite",
    ],
  },
  {
    number: "03",
    title: "Compliance Management",
    description:
      "Turn regulatory and framework requirements into measurable compliance coverage across your organization.",
    capabilities: [
      "Multi-Standard Compliance",
      "Control Coverage",
      "GAP Intelligence",
      "Control Health",
      "Compliance Readiness",
    ],
  },
  {
    number: "04",
    title: "Internal Audit",
    description:
      "Plan, execute and manage audit activities with complete visibility across findings, evidence, controls and remediation.",
    capabilities: [
      "Audit Planning",
      "Audit Findings",
      "Control Testing",
      "Audit Evidence",
      "Remediation Tracking",
    ],
  },
  {
    number: "05",
    title: "Evidence Management",
    description:
      "Centralize compliance evidence and maintain a controlled lifecycle from collection and review through approval and audit readiness.",
    capabilities: [
      "Evidence Library",
      "Evidence Review",
      "Approval Workflow",
      "Evidence Versioning",
      "Evidence → Control Linking",
    ],
  },
  {
    number: "06",
    title: "Executive Intelligence",
    description:
      "Convert operational compliance data into executive-level intelligence for faster and better-informed decisions.",
    capabilities: [
      "Executive Readiness",
      "Compliance Health",
      "Risk Exposure",
      "Control Health",
      "Executive Alerts",
    ],
  },
];

const intelligence = [
  {
    title: "AI Risk Prioritization",
    description:
      "Identify the risks and controls requiring the highest level of management attention.",
  },
  {
    title: "AI Gap Detection",
    description:
      "Surface coverage weaknesses and evidence deficiencies across the compliance environment.",
  },
  {
    title: "AI Recommendations",
    description:
      "Translate compliance signals into prioritized actions and remediation recommendations.",
  },
  {
    title: "Executive AI Insights",
    description:
      "Provide concise intelligence for executives based on risk, evidence, controls and readiness.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Understand",
    description:
      "Map standards, requirements, controls, processes, risks and organizational responsibilities.",
  },
  {
    step: "02",
    title: "Assess",
    description:
      "Measure compliance coverage, risk exposure, evidence strength and control health.",
  },
  {
    step: "03",
    title: "Remediate",
    description:
      "Convert identified gaps and risks into prioritized tasks, owners and remediation activities.",
  },
  {
    step: "04",
    title: "Intelligence",
    description:
      "Transform operational data into executive readiness, alerts, trends and predictive intelligence.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-950">
        {/* HERO */}
        <section className="relative overflow-hidden pt-36">
          <div className="absolute left-[-180px] top-[-120px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[130px]" />
          <div className="absolute right-[-180px] top-[180px] h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[130px]" />

          <div className="container relative py-24">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Solutions
            </span>

            <h1 className="mt-6 max-w-6xl text-5xl font-black leading-[1.02] tracking-[-0.04em] text-slate-950 md:text-6xl xl:text-8xl">
              Built for modern
              <br />
              compliance teams.
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-600 md:text-2xl">
              Automate governance, strengthen risk management, streamline
              audits and turn compliance data into executive intelligence
              through a single enterprise platform.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/demo"
                className="rounded-full bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Request Demo →
              </Link>

              <Link
                href="/platform"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Explore Platform
              </Link>
            </div>
          </div>
        </section>

        {/* SOLUTION ARCHITECTURE */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="container py-20">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                One intelligence layer
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                One platform for the complete compliance lifecycle.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                ComplianceOS connects governance, risk, compliance, audit,
                evidence and execution into one continuous operating model.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {solutions.map((solution) => (
                <article
                  key={solution.number}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-bold tracking-[0.2em] text-blue-600">
                      {solution.number}
                    </span>

                    <span className="text-slate-300 transition group-hover:text-blue-500">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-950">
                    {solution.title}
                  </h3>

                  <p className="mt-4 min-h-[96px] leading-7 text-slate-600">
                    {solution.description}
                  </p>

                  <div className="mt-8 border-t border-slate-100 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Core capabilities
                    </p>

                    <ul className="mt-4 space-y-3">
                      {solution.capabilities.map((capability) => (
                        <li
                          key={capability}
                          className="flex items-start gap-3 text-sm text-slate-700"
                        >
                          <span className="mt-1 text-blue-600">●</span>
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* OPERATING MODEL */}
        <section className="container py-24">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                Compliance operating model
              </span>

              <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                From compliance data to actionable intelligence.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                ComplianceOS creates a continuous chain between what the
                organization must do, what has been implemented, what evidence
                exists, what risks remain and what management should do next.
              </p>
            </div>

            <div className="grid gap-4">
              {workflow.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
                    {item.step}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI INTELLIGENCE */}
        <section className="bg-slate-950 text-white">
          <div className="container py-24">
            <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                  Intelligence layer
                </span>

                <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                  Compliance intelligence that goes beyond reporting.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  ComplianceOS transforms governance, risk, evidence and
                  execution data into intelligence that helps teams prioritize
                  the issues that matter most.
                </p>

                <Link
                  href="/platform"
                  className="mt-8 inline-flex rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  Explore Intelligence →
                </Link>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {intelligence.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-800 bg-slate-900 p-7"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                      ✦
                    </div>

                    <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                    <p className="mt-3 leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESS OUTCOMES */}
        <section className="container py-24">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Business outcomes
            </span>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Turn compliance from a reporting function into an operating
              advantage.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                value: "01",
                title: "Unified Visibility",
                text: "Connect risks, controls, evidence, tasks and processes in one operational view.",
              },
              {
                value: "02",
                title: "Faster Remediation",
                text: "Move from identified gaps to accountable remediation without losing context.",
              },
              {
                value: "03",
                title: "Audit Readiness",
                text: "Maintain evidence, coverage and control status continuously instead of preparing manually.",
              },
              {
                value: "04",
                title: "Executive Clarity",
                text: "Give leadership a clear view of compliance health, exposure and readiness.",
              },
            ].map((item) => (
              <div
                key={item.value}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
              >
                <span className="text-sm font-bold tracking-[0.2em] text-blue-600">
                  {item.value}
                </span>

                <h3 className="mt-8 text-xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container pb-24">
          <div className="relative overflow-hidden rounded-[2rem] bg-blue-600 px-8 py-16 text-white md:px-16">
            <div className="absolute right-[-100px] top-[-150px] h-[400px] w-[400px] rounded-full bg-white/10 blur-[100px]" />

            <div className="relative max-w-4xl">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
                ComplianceOS
              </span>

              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                Build a smarter compliance operation.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
                See how ComplianceOS can connect governance, risk, compliance,
                audit, evidence and executive intelligence in your
                organization.
              </p>

              <Link
                href="/demo"
                className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Request a Demo →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
