import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const navigation = [
  {
    title: "GETTING STARTED",
    items: [
      "Overview",
      "Organization Setup",
      "Users & Roles",
    ],
  },
  {
    title: "PLATFORM",
    items: [
      "Architecture",
      "Compliance Matrix",
      "Risk Intelligence",
      "Evidence Management",
      "Tasks & Remediation",
      "Executive Intelligence",
    ],
  },
  {
    title: "ADMINISTRATION",
    items: [
      "Permissions",
      "Scopes",
      "Activity & Audit",
      "Organization Settings",
    ],
  },
];

const modules = [
  {
    title: "Compliance Matrix",
    description:
      "Connect standards, clauses, requirements and controls within a structured compliance model.",
  },
  {
    title: "Risk Intelligence",
    description:
      "Assess risk exposure, probability, escalation and control relationships.",
  },
  {
    title: "Evidence Management",
    description:
      "Collect, review, approve and connect evidence to compliance controls.",
  },
  {
    title: "Tasks & Remediation",
    description:
      "Convert risks and compliance gaps into accountable actions and remediation workflows.",
  },
  {
    title: "Executive Intelligence",
    description:
      "Transform operational compliance data into executive-level health, readiness and priority insights.",
  },
  {
    title: "Administration",
    description:
      "Manage users, roles, permissions, organizational scopes and activity across the platform.",
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
          <div className="grid gap-16 lg:grid-cols-[240px_1fr]">
            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <div className="border-l border-slate-200 pl-5">
                {navigation.map((group) => (
                  <div key={group.title} className="mb-10">
                    <p className="mb-4 text-xs font-bold tracking-[0.18em] text-slate-400">
                      {group.title}
                    </p>

                    <ul className="space-y-3">
                      {group.items.map((item, index) => (
                        <li key={item}>
                          <button
                            type="button"
                            className={`text-left text-sm transition ${
                              group.title === "GETTING STARTED" &&
                              index === 0
                                ? "font-semibold text-blue-600"
                                : "text-slate-600 hover:text-slate-950"
                            }`}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </aside>

            {/* CONTENT */}
            <div className="max-w-5xl">
              <div className="border-b border-slate-200 pb-12">
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
              </div>

              {/* CORE CONCEPTS */}
              <section className="border-b border-slate-200 py-12">
                <h3 className="text-2xl font-bold">Core concepts</h3>

                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                  The platform is organized around a connected data and
                  operational model rather than isolated compliance registers.
                </p>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">
                  <div className="grid sm:grid-cols-2">
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
                      [
                        "Risks",
                        "Defines exposure and potential impact.",
                      ],
                      [
                        "Evidence",
                        "Provides proof of control implementation.",
                      ],
                      [
                        "Tasks",
                        "Turns identified issues into actions.",
                      ],
                    ].map(([title, description]) => (
                      <div
                        key={title}
                        className="border-b border-slate-200 p-6 last:border-b-0 sm:nth-[odd]:border-r"
                      >
                        <h4 className="font-bold text-slate-900">{title}</h4>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ARCHITECTURE */}
              <section className="border-b border-slate-200 py-12">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Architecture
                </p>

                <h3 className="mt-4 text-3xl font-black">
                  How the platform connects.
                </h3>

                <div className="mt-10 rounded-3xl bg-slate-950 p-8 text-white">
                  <div className="grid gap-3 md:grid-cols-7 md:items-center">
                    {[
                      "Organization",
                      "Standards",
                      "Requirements",
                      "Controls",
                      "Evidence",
                      "Risk",
                      "Tasks",
                    ].map((item, index) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-4 text-center">
                          <span className="text-xs font-medium">
                            {item}
                          </span>
                        </div>

                        {index < 6 && (
                          <span className="hidden text-blue-400 md:block">
                            →
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5 text-center">
                    <p className="text-sm font-semibold text-blue-300">
                      Executive Intelligence
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      Connected operational data becomes compliance health,
                      risk exposure, readiness and executive priorities.
                    </p>
                  </div>
                </div>
              </section>

              {/* MODULES */}
              <section className="py-12">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Platform Modules
                </p>

                <h3 className="mt-4 text-3xl font-black">
                  Explore the platform.
                </h3>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  {modules.map((module) => (
                    <article
                      key={module.title}
                      className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-200 hover:shadow-lg"
                    >
                      <h4 className="text-xl font-bold text-slate-900">
                        {module.title}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {module.description}
                      </p>

                      <button
                        type="button"
                        className="mt-5 text-sm font-semibold text-blue-600"
                      >
                        View documentation →
                      </button>
                    </article>
                  ))}
                </div>
              </section>

              {/* SUPPORT */}
              <section className="mt-6 rounded-3xl bg-slate-50 p-8">
                <h3 className="text-2xl font-bold">
                  Need help?
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  If you need assistance understanding the platform or
                  configuring your compliance operating model, our support
                  team can help.
                </p>

                <a
                  href="/support"
                  className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Visit Support →
                </a>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}