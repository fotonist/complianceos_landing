import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Essentials",
    description:
      "Core compliance capabilities for organizations building a structured compliance operating model.",
    label: "For growing teams",
    featured: false,
    capabilities: [
      "Compliance framework management",
      "Compliance Matrix",
      "Requirements & controls",
      "Risk management",
      "Evidence Library",
      "Task management",
      "Basic compliance reporting",
    ],
  },
  {
    name: "Professional",
    description:
      "Advanced compliance and risk intelligence for organizations managing multiple standards and operational complexity.",
    label: "Most Popular",
    featured: true,
    capabilities: [
      "Everything in Essentials",
      "Advanced Risk Intelligence",
      "GAP Intelligence",
      "Control Health",
      "Evidence Review & workflows",
      "Advanced compliance analytics",
      "Executive Readiness",
      "AI-powered prioritization",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Full ComplianceOS intelligence for complex organizations requiring enterprise governance, security and executive visibility.",
    label: "For enterprises",
    featured: false,
    capabilities: [
      "Everything in Professional",
      "Executive Intelligence",
      "Advanced AI capabilities",
      "Multi-organization support",
      "Enterprise administration",
      "Advanced RBAC",
      "Scope management",
      "Enterprise audit & activity",
      "Custom integrations",
      "Enterprise support",
    ],
  },
];

const comparison = [
  {
    category: "Compliance Foundation",
    items: [
      ["Framework Management", "All plans"],
      ["Compliance Matrix", "All plans"],
      ["Requirements & Controls", "All plans"],
      ["Evidence Library", "All plans"],
    ],
  },
  {
    category: "Risk & Intelligence",
    items: [
      ["Risk Management", "All plans"],
      ["Risk Intelligence", "Professional+"],
      ["GAP Intelligence", "Professional+"],
      ["Control Health", "Professional+"],
      ["Executive Readiness", "Professional+"],
      ["Executive Intelligence", "Enterprise"],
    ],
  },
  {
    category: "Execution",
    items: [
      ["Task Management", "All plans"],
      ["Remediation", "All plans"],
      ["Evidence Review", "Professional+"],
      ["Advanced Workflows", "Professional+"],
    ],
  },
  {
    category: "Enterprise",
    items: [
      ["Advanced RBAC", "Enterprise"],
      ["Scope Management", "Enterprise"],
      ["Multi-organization", "Enterprise"],
      ["Custom Integrations", "Enterprise"],
      ["Enterprise Support", "Enterprise"],
    ],
  },
];

const faqs = [
  {
    question: "Is ComplianceOS priced per user?",
    answer:
      "Pricing can take organizational scale, users, scope, framework complexity and required capabilities into account. Contact our team for a configuration tailored to your organization.",
  },
  {
    question: "Can we manage multiple compliance frameworks?",
    answer:
      "ComplianceOS is designed around a unified compliance model that can connect multiple standards, requirements, controls, risks and evidence.",
  },
  {
    question: "Can we start small and expand later?",
    answer:
      "Yes. The platform architecture is designed to scale from core compliance operations into advanced risk, intelligence and enterprise capabilities.",
  },
  {
    question: "Do you offer enterprise configurations?",
    answer:
      "Enterprise configurations can include advanced administration, organizational scope, integrations and enterprise support requirements.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-950">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-slate-200 pt-32">
          <div className="absolute left-[-180px] top-20 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[130px]" />

          <div className="absolute right-[-180px] top-40 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[130px]" />

          <div className="container relative mx-auto max-w-[1200px] px-6 py-24 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">
              Pricing
            </span>

            <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
              Compliance intelligence
              <br />
              that scales with you.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              Start with the capabilities your organization needs today and
              expand into advanced risk, compliance and executive intelligence
              as your operating model matures.
            </p>
          </div>
        </section>

        {/* PLANS */}
        <section className="container mx-auto max-w-[1450px] px-6 py-24">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative rounded-[2rem] border p-8 transition duration-300 ${
                  plan.featured
                    ? "border-blue-600 bg-slate-950 text-white shadow-2xl shadow-blue-900/20 lg:-translate-y-3"
                    : "border-slate-200 bg-white text-slate-950 shadow-sm hover:-translate-y-1 hover:shadow-xl"
                }`}
              >
                {plan.featured ? (
                  <div className="absolute left-8 top-0 -translate-y-1/2 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white">
                    {plan.label}
                  </div>
                ) : (
                  <span
                    className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                      plan.name === "Enterprise"
                        ? "text-blue-600"
                        : "text-slate-400"
                    }`}
                  >
                    {plan.label}
                  </span>
                )}

                <h2 className="mt-5 text-3xl font-black">{plan.name}</h2>

                <p
                  className={`mt-5 min-h-[112px] leading-7 ${
                    plan.featured ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {plan.description}
                </p>

                <div
                  className={`my-8 border-t ${
                    plan.featured
                      ? "border-slate-800"
                      : "border-slate-200"
                  }`}
                />

                <p
                  className={`text-xs font-bold uppercase tracking-[0.18em] ${
                    plan.featured ? "text-blue-400" : "text-slate-400"
                  }`}
                >
                  Included capabilities
                </p>

                <ul className="mt-6 space-y-4">
                  {plan.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-start gap-3 text-sm"
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
                          plan.featured
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        ✓
                      </span>

                      <span
                        className={
                          plan.featured
                            ? "text-slate-200"
                            : "text-slate-700"
                        }
                      >
                        {capability}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/demo"
                  className={`mt-10 flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-semibold transition ${
                    plan.featured
                      ? "bg-blue-600 text-white hover:bg-blue-500"
                      : "border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50"
                  }`}
                >
                  {plan.name === "Enterprise"
                    ? "Talk to Sales"
                    : "Request a Demo"}
                  <span className="ml-2">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ENTERPRISE APPROACH */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="container mx-auto max-w-[1200px] px-6 py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Enterprise approach
                </span>

                <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                  Your compliance environment is unique.
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-slate-600">
                  ComplianceOS pricing is designed around the scale,
                  complexity and intelligence requirements of each
                  organization.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Framework count, organizational scope, users, risk volume,
                  integrations and enterprise requirements can all influence
                  the right configuration.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Talk to our team to define the right ComplianceOS operating
                  model for your organization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="container mx-auto max-w-[1200px] px-6 py-24">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Compare plans
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Choose the level of intelligence you need.
            </h2>
          </div>

          <div className="mt-16 overflow-hidden rounded-3xl border border-slate-200">
            {comparison.map((group) => (
              <div key={group.category}>
                <div className="border-b border-slate-200 bg-slate-50 px-6 py-5">
                  <h3 className="font-bold text-slate-900">
                    {group.category}
                  </h3>
                </div>

                <div className="divide-y divide-slate-100">
                  {group.items.map(([feature, availability]) => (
                    <div
                      key={feature}
                      className="grid gap-3 px-6 py-5 sm:grid-cols-[1fr_auto] sm:items-center"
                    >
                      <span className="text-sm font-medium text-slate-700">
                        {feature}
                      </span>

                      <span className="text-sm font-semibold text-blue-600">
                        {availability}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-slate-200 bg-white">
          <div className="container mx-auto max-w-[900px] px-6 py-24">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                Frequently asked questions
              </span>

              <h2 className="mt-5 text-4xl font-black tracking-tight">
                Pricing questions
              </h2>
            </div>

            <div className="mt-14 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 p-6"
                >
                  <summary className="cursor-pointer list-none font-semibold text-slate-900">
                    {faq.question}
                    <span className="float-right text-blue-600">+</span>
                  </summary>

                  <p className="mt-4 leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="container mx-auto max-w-[1200px] px-6 pb-24">
          <div className="overflow-hidden rounded-[2rem] bg-blue-600 px-8 py-16 text-center text-white md:px-16">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
              ComplianceOS
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
              Find the right compliance intelligence model for your
              organization.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Talk to our team and see how ComplianceOS can support your
              governance, risk, compliance and executive intelligence
              requirements.
            </p>

            <a
              href="/demo"
              className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Request a Demo →
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}