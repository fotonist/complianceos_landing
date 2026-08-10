import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SolutionsPage() {
  return (
    <>
      <Navbar/>

      <main className="pt-32">
        <section className="container py-24">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Solutions
          </span>

          <h1 className="mt-6 max-w-4xl text-6xl font-black tracking-tight text-slate-900">
            Built for modern
            <br />
            compliance teams.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Automate governance, streamline audits, strengthen
            risk management and enable executive decision-making
            through a single intelligence platform.
          </p>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {[
              "Governance",
              "Risk Management",
              "Compliance",
              "Internal Audit",
              "Evidence Management",
              "Executive Intelligence",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {item}
                </h3>

                <p className="mt-4 text-slate-600">
                  Enterprise-grade capabilities designed to
                  improve operational visibility and compliance
                  performance.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}