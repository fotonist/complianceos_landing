import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PlatformPage() {
  return (
    <>
      <Navbar/>

      <main className="pt-32">
        <section className="container py-24">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Platform
          </span>

          <h1 className="mt-6 text-6xl font-black tracking-tight text-slate-900">
            One Platform.
            <br />
            Complete Compliance Intelligence.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Compliance Intelligence OS unifies Governance,
            Risk, Compliance, Audit, AI and Executive
            Intelligence into a single enterprise platform.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}