import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const industries = [
  {
    title: "Financial Services",
    description:
      "Strengthen governance, regulatory compliance and operational resilience across banking, insurance and fintech.",
    capabilities: [
      "Regulatory compliance",
      "Operational resilience",
      "Risk management",
      "Internal audit readiness",
    ],
  },
  {
    title: "Healthcare",
    description:
      "Manage sensitive information, compliance obligations and enterprise risks through a unified compliance intelligence platform.",
    capabilities: [
      "Information governance",
      "Privacy and data protection",
      "Risk oversight",
      "Audit readiness",
    ],
  },
  {
    title: "Manufacturing",
    description:
      "Standardize quality, information security and operational compliance across plants, facilities and supply chains.",
    capabilities: [
      "Quality management",
      "Information security",
      "Operational compliance",
      "Supplier risk",
    ],
  },
  {
    title: "Technology",
    description:
      "Accelerate secure software delivery while maintaining compliance with international standards and customer requirements.",
    capabilities: [
      "Security compliance",
      "Third-party risk",
      "Control management",
      "Evidence readiness",
    ],
  },
  {
    title: "Government",
    description:
      "Support public institutions with transparent governance, structured risk management, audit readiness and regulatory oversight.",
    capabilities: [
      "Governance",
      "Regulatory compliance",
      "Audit management",
      "Risk oversight",
    ],
  },
  {
    title: "Energy",
    description:
      "Improve operational control, resilience and regulatory compliance across critical infrastructure and energy operations.",
    capabilities: [
      "Operational resilience",
      "Critical infrastructure",
      "Risk management",
      "Regulatory compliance",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32">
        {/* Hero */}
        <section className="container py-24">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Industries
          </span>

          <h1 className="mt-6 max-w-5xl text-6xl font-black leading-[1.05] tracking-tight text-slate-900">
            Designed for every
            <br />
            regulated industry.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Compliance Intelligence OS adapts to different industries while
            providing a consistent enterprise governance, risk and compliance
            experience.
          </p>
        </section>

        {/* Industry Grid */}
        <section className="container pb-28">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => (
              <article
                key={industry.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex min-h-[210px] flex-col">
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                    {industry.title}
                  </h2>

                  <p className="mt-5 text-base leading-8 text-slate-600">
                    {industry.description}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Key capabilities
                    </p>

                    <ul className="mt-4 space-y-2">
                      {industry.capabilities.map((capability) => (
                        <li
                          key={capability}
                          className="flex items-center text-sm text-slate-600"
                        >
                          <span className="mr-3 h-1.5 w-1.5 rounded-full bg-blue-600" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-8 text-sm font-semibold text-blue-600 transition group-hover:text-blue-700"
                >
                  Explore Industry →
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Enterprise Section */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="container py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  One intelligence layer
                </span>

                <h2 className="mt-5 max-w-2xl text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                  One platform. Multiple regulatory environments.
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-slate-600">
                  Compliance Intelligence OS brings governance, risk,
                  compliance, audit, evidence and executive intelligence
                  together in a unified enterprise architecture.
                </p>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Organizations can maintain consistent compliance operations
                  while adapting controls, risks, evidence and reporting to
                  the requirements of their industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container py-24">
          <div className="rounded-[2rem] bg-slate-900 px-8 py-16 text-center md:px-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Compliance Intelligence
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight text-white md:text-5xl">
              Build a compliance operating model designed for your industry.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              See how Compliance Intelligence OS can connect governance, risk,
              compliance, audit and evidence management across your
              organization.
            </p>

            <Link
              href="/demo"
              className="mt-10 inline-flex items-center rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Request Demo
              <span className="ml-3 text-lg">→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
