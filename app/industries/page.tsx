import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const industries = [
  {
    title: "Financial Services",
    description:
      "Strengthen governance, regulatory compliance and operational resilience across banking, insurance and fintech.",
  },
  {
    title: "Healthcare",
    description:
      "Manage sensitive information, compliance obligations and enterprise risks through a unified platform.",
  },
  {
    title: "Manufacturing",
    description:
      "Standardize quality, information security and operational compliance across global facilities.",
  },
  {
    title: "Technology",
    description:
      "Accelerate secure software delivery while maintaining compliance with international standards.",
  },
  {
    title: "Government",
    description:
      "Support public institutions with transparent governance, audit readiness and risk oversight.",
  },
  {
    title: "Energy",
    description:
      "Improve operational control, resilience and regulatory compliance across critical infrastructure.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar/>

      <main className="pt-32">
        <section className="container py-24">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Industries
          </span>

          <h1 className="mt-6 max-w-5xl text-6xl font-black tracking-tight text-slate-900">
            Designed for every
            <br />
            regulated industry.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Compliance Intelligence OS adapts to different
            industries while providing a consistent enterprise
            governance, risk and compliance experience.
          </p>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => (
              <article
                key={industry.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h2 className="text-2xl font-semibold text-slate-900">
                  {industry.title}
                </h2>

                <p className="mt-5 text-slate-600 leading-8">
                  {industry.description}
                </p>

                <button
                  type="button"
                  className="mt-8 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                >
                  Learn More →
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