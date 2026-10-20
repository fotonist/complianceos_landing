"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface DemoModalProps {
  open: boolean;
  onClose: () => void;
}

type DemoForm = {
  fullName: string;
  businessEmail: string;
  company: string;
  jobTitle: string;
  companySize: string;
  country: string;
  message: string;
};

const initialForm: DemoForm = {
  fullName: "",
  businessEmail: "",
  company: "",
  jobTitle: "",
  companySize: "",
  country: "",
  message: "",
};

export default function DemoModal({
  open,
  onClose,
}: DemoModalProps) {
  const pathname = usePathname();
  const tr = pathname === "/tr" || pathname?.startsWith("/tr/");
  const t = tr ? {
    title: "Demo Talep Et", description: "Standartlarınızı, risklerinizi, kanıtlarınızı ve iyileştirme çalışmalarınızı tek merkezden nasıl yönetebileceğinizi keşfedin.",
    close: "Kapat", thanks: "Teşekkürler", received: "Demo talebiniz alındı.", followUp: "Ekibimiz sizinle iletişime geçecek.",
    fullName: "Ad Soyad", businessEmail: "İş E-postası", company: "Şirket", jobTitle: "Görev / Unvan", companySize: "Çalışan Sayısı", country: "Ülke", message: "Uyumluluk hedeflerinizi bizimle paylaşın...", sending: "Gönderiliyor...", submit: "Demo Talep Et",
    error: "Demo talebiniz gönderilemedi. Lütfen tekrar deneyin.", nameRequired: "Ad soyad zorunludur.", emailRequired: "İş e-postası zorunludur.", emailInvalid: "Lütfen geçerli bir iş e-postası girin.",
  } : {
    title: "Request a Demo", description: "Discover how to manage your standards, risks, evidence and improvement actions in one workspace.",
    close: "Close", thanks: "Thank You", received: "Your demo request has been received.", followUp: "Our team will contact you.",
    fullName: "Full Name", businessEmail: "Business Email", company: "Company", jobTitle: "Job Title", companySize: "Company Size", country: "Country", message: "Tell us about your compliance goals...", sending: "Sending...", submit: "Request Demo",
    error: "Unable to submit demo request. Please try again.", nameRequired: "Full name is required.", emailRequired: "Business email is required.", emailInvalid: "Please provide a valid business email.",
  };
  const [form, setForm] = useState<DemoForm>(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setLoading(false);
      setSuccess(false);
      setError("");
      setForm(initialForm);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function updateField(
    field: keyof DemoForm,
    value: string
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (error) {
      setError("");
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data?.message || t.error
        );
      }

      setSuccess(true);
    } catch (err) {
      console.error("Demo request failed:", err);

      const validationErrors: Record<string, string> = {
        "Full name is required.": t.nameRequired,
        "Business email is required.": t.emailRequired,
        "Please provide a valid business email.": t.emailInvalid,
      };
      setError(err instanceof Error ? validationErrors[err.message] || t.error : t.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[90] bg-slate-950/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed left-1/2 top-1/2 z-[100] w-[92%] max-w-2xl -translate-x-1/2 -translate-y-1/2"
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="demo-title"
              lang={tr ? "tr" : "en"}
              className="max-h-[90vh] overflow-y-auto rounded-[32px] border border-white/20 bg-white/90 p-10 shadow-2xl backdrop-blur-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                    ComplianceOS
                  </p>

                  <h2 id="demo-title" className="mt-3 text-4xl font-bold text-slate-900">
                    {t.title}
                  </h2>

                  <p className="mt-4 max-w-lg text-slate-600">
                    {t.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl p-2 transition hover:bg-slate-100"
                  aria-label={t.close}
                >
                  <X size={20} />
                </button>
              </div>

              {success ? (
                <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-10 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white">
                    ✓
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {t.thanks}
                  </h3>

                  <p className="mt-4 text-slate-600">
                    {t.received}
                    <br />
                    {t.followUp}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="grid gap-5"
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <input
                      required
                      value={form.fullName}
                      onChange={(e) =>
                        updateField("fullName", e.target.value)
                      }
                      placeholder={t.fullName}
                      aria-label={t.fullName}
                      className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
                    />

                    <input
                      required
                      type="email"
                      value={form.businessEmail}
                      onChange={(e) =>
                        updateField(
                          "businessEmail",
                          e.target.value
                        )
                      }
                      placeholder={t.businessEmail}
                      aria-label={t.businessEmail}
                      className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
                    />

                    <input
                      value={form.company}
                      onChange={(e) =>
                        updateField("company", e.target.value)
                      }
                      placeholder={t.company}
                      aria-label={t.company}
                      className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
                    />

                    <input
                      value={form.jobTitle}
                      onChange={(e) =>
                        updateField("jobTitle", e.target.value)
                      }
                      placeholder={t.jobTitle}
                      aria-label={t.jobTitle}
                      className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
                    />

                    <input
                      value={form.companySize}
                      onChange={(e) =>
                        updateField(
                          "companySize",
                          e.target.value
                        )
                      }
                      placeholder={t.companySize}
                      aria-label={t.companySize}
                      className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
                    />

                    <input
                      value={form.country}
                      onChange={(e) =>
                        updateField("country", e.target.value)
                      }
                      placeholder={t.country}
                      aria-label={t.country}
                      className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
                    />
                  </div>

                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      updateField("message", e.target.value)
                    }
                    placeholder={t.message}
                      aria-label={t.message}
                    className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
                  />

                  {error && (
                    <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary mt-2 justify-center disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? t.sending : t.submit}

                    <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}