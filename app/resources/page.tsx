import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const resources = [
  {
    title: "Compliance Intelligence",
    description:
      "Understand how modern organizations can connect governance, risk, compliance, audit and executive intelligence in one operating model.",
    category: "Insights",
  },
  {
    title: "Governance & Risk",
    description:
      "Explore practical approaches for enterprise governance, risk management, control frameworks and regulatory readiness.",
    category: "Governance",
  },
  {
    title: "Audit Readiness",
    description:
      "Build stronger audit readiness with structured evidence, control ownership, findings and continuous compliance visibility.",
    category: "Audit",
  },
  {
    title: "Evidence Management",
    description:
      "Learn how organizations can organize evidence, improve evidence quality and maintain an auditable compliance record.",
    category: "Compliance",
  },
  {
    title: "Executive Intelligence",
    description:
      "Turn compliance, risk and audit data into decision-ready intelligence for leadership teams.",
    category: "Executive",
  },
  {
    title: "ComplianceOS Updates",
    description:
      "Follow product capabilities, platform developments and new approaches to enterprise compliance intelligence.",
    category: "Product",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32">
        <section className="container py-24">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Resources
          </span>

          <h1 className="mt-6 max-w-5xl text-6xl font-black tracking-tight text-slate-900">
            Knowledge for
            <br />
            modern compliance teams.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Explore practical insights, guidance and perspectives for
            governance, risk, compliance, audit and executive decision-making.
          </p>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {resources.map((resource) => (
              <article
                key={resource.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                  {resource.category}
                </span>

                <h2 className="mt-5 text-2xl font-bold text-slate-900">
                  {resource.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {resource.description}
                </p>

                <button
                  type="button"
                  className="mt-8 font-semibold text-blue-600 transition hover:text-blue-700"
                >
                  Explore →
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}