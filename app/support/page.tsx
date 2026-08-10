import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const supportOptions = [
  {
    title: "Product Support",
    description:
      "Get help with ComplianceOS features, platform capabilities and day-to-day usage.",
  },
  {
    title: "Implementation Support",
    description:
      "Get guidance during platform implementation, configuration and organizational rollout.",
  },
  {
    title: "Compliance Guidance",
    description:
      "Explore guidance related to governance, risk, compliance, audit and evidence management.",
  },
  {
    title: "Technical Support",
    description:
      "Resolve technical questions related to platform access, integrations and system operation.",
  },
];

const faqs = [
  {
    question: "How can I request a ComplianceOS demo?",
    answer:
      "Use the Request Demo button to submit your organization and contact information.",
  },
  {
    question: "Which compliance frameworks does ComplianceOS support?",
    answer:
      "ComplianceOS is designed to support multiple governance, risk, compliance and audit frameworks through a unified platform model.",
  },
  {
    question: "Can ComplianceOS support enterprise organizations?",
    answer:
      "Yes. The platform is designed around enterprise governance, risk, compliance, audit and executive intelligence requirements.",
  },
  {
    question: "How do I get technical assistance?",
    answer:
      "Contact the ComplianceOS support team with your organization and the issue you are experiencing.",
  },
];

export default function SupportPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32">
        <section className="container py-24">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Support
          </span>

          <h1 className="mt-6 max-w-5xl text-6xl font-black tracking-tight text-slate-900">
            Support for your
            <br />
            compliance journey.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Get the guidance you need to implement, operate and get the most
            value from ComplianceOS.
          </p>

          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {supportOptions.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h2 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

                <a
                  href="mailto:support@complianceos.com"
                  className="mt-8 inline-flex font-semibold text-blue-600 transition hover:text-blue-700"
                >
                  Contact Support →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50">
          <div className="container py-24">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              FAQ
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900">
              Frequently asked questions.
            </h2>

            <div className="mt-12 grid gap-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-slate-200 bg-white p-8"
                >
                  <h3 className="text-xl font-bold text-slate-900">
                    {faq.question}
                  </h3>

                  <p className="mt-4 max-w-4xl leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-24">
          <div className="rounded-[2rem] bg-slate-900 px-8 py-16 text-center md:px-16">
            <h2 className="text-4xl font-black tracking-tight text-white">
              Need help getting started?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Talk to the ComplianceOS team and discover how the platform can
              support your organization.
            </p>

            <Link
              href="/demo"
              className="mt-8 inline-flex rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Request Demo →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}