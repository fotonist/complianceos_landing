import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const platformLayers = [
  {
    number: "01",
    title: "Foundation",
    description:
      "Establish the organizational context that gives compliance data its operational meaning.",
    items: [
      "Company Profile",
      "Processes",
      "Organizational Context",
      "Standards",
    ],
  },
  {
    number: "02",
    title: "Governance",
    description:
      "Connect standards, requirements, controls and risk within one governance model.",
    items: [
      "Control Matrix",
      "Control Analytics",
      "Risk Appetite",
      "Requirements",
    ],
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Turn identified risks and compliance gaps into accountable operational actions.",
    items: [
      "Risk Management",
      "Tasks",
      "Remediation Center",
      "Evidence Review",
    ],
  },
  {
    number: "04",
    title: "Intelligence",
    description:
      "Transform operational compliance data into risk, gap and executive intelligence.",
    items: [
      "Risk Intelligence",
      "GAP Intelligence",
      "Control Health",
      "Executive Readiness",
    ],
  },
];

const intelligenceModules = [
  {
    title: "Compliance Matrix",
    label: "GOVERNANCE",
    description:
      "Map standards, clauses, requirements and controls into a unified compliance structure.",
    flow: ["Standard", "Clause", "Requirement", "Control"],
  },
  {
    title: "Evidence Intelligence",
    label: "EVIDENCE",
    description:
      "Connect evidence collection and approval directly to control coverage and compliance health.",
    flow: ["Evidence", "Review", "Approval", "Coverage"],
  },
  {
    title: "Risk Intelligence",
    label: "RISK",
    description:
      "Move beyond risk registers with exposure, probability, escalation and AI prioritization.",
    flow: ["Risk", "Exposure", "Escalation", "Priority"],
  },
  {
    title: "GAP Intelligence",
    label: "INTELLIGENCE",
    description:
      "Identify uncovered controls, severity and remediation priorities across the organization.",
    flow: ["Gap", "Severity", "Priority", "Action"],
  },
];

const executiveMetrics = [
  {
    value: "Risk",
    title: "Risk Exposure",
    description:
      "Understand where risk concentration and potential escalation require attention.",
  },
  {
    value: "Control",
    title: "Control Health",
    description:
      "See how controls perform based on risk, evidence and operational coverage.",
  },
  {
    value: "Evidence",
    title: "Evidence Coverage",
    description:
      "Understand whether compliance claims are supported by sufficient evidence.",
  },
  {
    value: "Process",
    title: "Executive Readiness",
    description:
      "Measure readiness at process level through coverage, risks and trends.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-950">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-slate-200 pt-32">
          <div className="absolute left-[-180px] top-20 h-[500px] w-[500px] rounded-full bg-blue-100/70 blur-[120px]" />
          <div className="absolute right-[-180px] top-40 h-[500px] w-[500px] rounded-full bg-indigo-100/60 blur-[120px]" />

          <div className="container relative mx-auto grid max-w-[1500px] gap-16 py-24 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">
                ComplianceOS Platform
              </span>

              <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
                One Platform.
                <br />
                Complete Compliance
                <br />
                Intelligence.
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                ComplianceOS connects governance, risk, controls, evidence,
                remediation and executive intelligence into one unified
                compliance operating model.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#platform"
                  className="inline-flex items-center rounded-full bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                >
                  Explore the Platform
                  <span className="ml-3">→</span>
                </a>

                <Link
                  href="/demo"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Request a Demo
                  <span className="ml-3">→</span>
                </Link>
              </div>
            </div>

            {/* EXECUTIVE DASHBOARD PREVIEW */}
            <div className="relative">
              <div className="rounded-[28px] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-300/40">
                <div className="rounded-[22px] border border-slate-200 bg-slate-950 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Executive Intelligence
                      </p>

                      <h3 className="mt-1 text-lg font-semibold text-white">
                        Compliance Health
                      </h3>
                    </div>

                    <div className="text-right">
                      <p className="text-[10px] uppercase text-slate-400">
                        Health Index
                      </p>

                      <p className="text-4xl font-bold text-emerald-400">
                        42.4
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                      <p className="text-xs text-slate-400">Linked Risks</p>
                      <p className="mt-2 text-2xl font-bold text-white">11</p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                      <p className="text-xs text-slate-400">Critical Risks</p>
                      <p className="mt-2 text-2xl font-bold text-red-400">2</p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                      <p className="text-xs text-slate-400">Open Tasks</p>
                      <p className="mt-2 text-2xl font-bold text-white">
                        216
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                      <p className="text-xs text-slate-400">Evidence</p>
                      <p className="mt-2 text-2xl font-bold text-white">30</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        Control Health Trend
                      </span>

                      <span className="text-xs text-emerald-400">
                        Intelligence
                      </span>
                    </div>

                    <div className="mt-5 flex h-20 items-end gap-2">
                      {[42, 55, 62, 58, 74, 68, 82, 76, 91].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t bg-blue-500/70"
                            style={{ height: `${height}%` }}
                          />
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OPERATING MODEL */}
        <section id="platform" className="border-b border-slate-200 py-28">
          <div className="container mx-auto max-w-[1400px] px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                Operating Model
              </span>

              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                One connected compliance operating model.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                ComplianceOS connects the operational layers of compliance so
                that information does not remain isolated inside individual
                registers, spreadsheets or audit activities.
              </p>
            </div>

            <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {platformLayers.map((layer) => (
                <div
                  key={layer.number}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-blue-600">
                      {layer.number}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold">{layer.title}</h3>

                  <p className="mt-4 min-h-[80px] text-sm leading-6 text-slate-600">
                    {layer.description}
                  </p>

                  <div className="mt-6 space-y-2">
                    {layer.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm font-medium text-slate-800"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MATRIX FLOW */}
        <section className="bg-slate-950 py-28 text-white">
          <div className="container mx-auto max-w-[1400px] px-6">
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                  Compliance Matrix
                </span>

                <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                  From standards to operational controls.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-400">
                  Connect standards, clauses, requirements and controls in a
                  structured compliance matrix that becomes the foundation for
                  evidence, risk and coverage intelligence.
                </p>
              </div>

              <div className="rounded-[30px] border border-slate-800 bg-slate-900 p-8">
                <div className="grid gap-3 sm:grid-cols-4">
                  {["Standard", "Clause", "Requirement", "Control"].map(
                    (item, index) => (
                      <div
                        key={item}
                        className="relative rounded-2xl border border-slate-700 bg-slate-950 p-5"
                      >
                        <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                          0{index + 1}
                        </p>

                        <p className="mt-3 font-semibold text-white">
                          {item}
                        </p>

                        {index < 3 && (
                          <span className="absolute -right-3 top-1/2 hidden text-blue-400 sm:block">
                            →
                          </span>
                        )}
                      </div>
                    ),
                  )}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Evidence", "Coverage"],
                    ["Risk", "Exposure"],
                    ["Task", "Remediation"],
                  ].map(([left, right]) => (
                    <div
                      key={left}
                      className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
                    >
                      <p className="text-xs text-slate-500">{left}</p>

                      <p className="mt-2 font-semibold text-white">{right}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTELLIGENCE MODULES */}
        <section className="py-28">
          <div className="container mx-auto max-w-[1400px] px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                Intelligence Layer
              </span>

              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                Compliance data becomes intelligence.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                ComplianceOS continuously connects evidence, controls, risks,
                gaps and remediation activities to create a more complete view
                of organizational compliance health.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {intelligenceModules.map((module) => (
                <div
                  key={module.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="text-xs font-bold tracking-[0.2em] text-blue-600">
                    {module.label}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold">{module.title}</h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {module.description}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-2">
                    {module.flow.map((item, index) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800">
                          {item}
                        </span>

                        {index < module.flow.length - 1 && (
                          <span className="text-slate-400">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EVIDENCE / RISK / EXECUTION */}
        <section className="border-y border-slate-200 bg-slate-50 py-28">
          <div className="container mx-auto max-w-[1400px] px-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  Evidence
                </div>

                <h3 className="mt-5 text-2xl font-bold">
                  Evidence that proves compliance.
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Centralize evidence, manage review and approval workflows,
                  and connect evidence directly to control coverage.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    "Evidence Library",
                    "Evidence Review",
                    "Approval Workflow",
                    "Coverage Intelligence",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-sm">
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                  Risk
                </div>

                <h3 className="mt-5 text-2xl font-bold">
                  From risk registers to risk intelligence.
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  Analyze risk score, probability, exposure, escalation and
                  control relationships to identify what requires attention.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    "Exposure",
                    "Probability",
                    "Escalation",
                    "AI Priority",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-4 text-sm font-medium"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  Execution
                </div>

                <h3 className="mt-5 text-2xl font-bold">
                  Turn findings into action.
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Connect risks and gaps with accountable tasks, remediation
                  activities, owners and due dates.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Risk",
                    "Gap",
                    "Task",
                    "Owner",
                    "Due Date",
                    "Evidence",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXECUTIVE INTELLIGENCE */}
        <section className="bg-slate-950 py-28 text-white">
          <div className="container mx-auto max-w-[1400px] px-6">
            <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                  Executive Intelligence
                </span>

                <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                  From compliance data to executive decisions.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-400">
                  ComplianceOS gives leadership a consolidated view of
                  compliance health, risk exposure, evidence strength and
                  operational priorities.
                </p>

                <Link
                  href="/demo"
                  className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  See ComplianceOS in Action
                  <span className="ml-3">→</span>
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {executiveMetrics.map((metric) => (
                  <div
                    key={metric.title}
                    className="rounded-3xl border border-slate-800 bg-slate-900 p-7"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                      {metric.value}
                    </span>

                    <h3 className="mt-4 text-xl font-bold">{metric.title}</h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {metric.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI */}
        <section className="py-28">
          <div className="container mx-auto max-w-[1200px] px-6 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              AI Intelligence
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Intelligence across every layer.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              AI works across the compliance operating model to identify
              priorities, surface risk signals and transform complex
              compliance information into actionable insight.
            </p>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "AI Risk Forecasting",
                "AI Control Prioritization",
                "AI Executive Summary",
                "AI Recommendations",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-600">
                    AI
                  </div>

                  <h3 className="mt-5 font-bold">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="border-t border-slate-200 bg-slate-50 py-24">
          <div className="container mx-auto max-w-[1100px] px-6 text-center">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Turn compliance data into intelligence.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Bring governance, risk, controls, evidence, remediation and
              executive intelligence into one connected platform.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/demo"
                className="inline-flex rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Request a Demo
                <span className="ml-3">→</span>
              </Link>

              <Link
                href="/solutions"
                className="inline-flex rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
