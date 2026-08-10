"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

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
          data?.message || "Unable to submit demo request."
        );
      }

      setSuccess(true);
    } catch (err) {
      console.error("Demo request failed:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to submit demo request. Please try again."
      );
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
              className="max-h-[90vh] overflow-y-auto rounded-[32px] border border-white/20 bg-white/90 p-10 shadow-2xl backdrop-blur-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                    ComplianceOS
                  </p>

                  <h2 className="mt-3 text-4xl font-bold text-slate-900">
                    Request a Demo
                  </h2>

                  <p className="mt-4 max-w-lg text-slate-600">
                    Discover how ComplianceOS helps enterprises
                    centralize Governance, Risk, Compliance and
                    Audit in one AI-powered platform.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl p-2 transition hover:bg-slate-100"
                  aria-label="Close"
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
                    Thank You
                  </h3>

                  <p className="mt-4 text-slate-600">
                    Your demo request has been received.
                    <br />
                    Our team will contact you within one business day.
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
                      placeholder="Full Name"
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
                      placeholder="Business Email"
                      className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
                    />

                    <input
                      value={form.company}
                      onChange={(e) =>
                        updateField("company", e.target.value)
                      }
                      placeholder="Company"
                      className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
                    />

                    <input
                      value={form.jobTitle}
                      onChange={(e) =>
                        updateField("jobTitle", e.target.value)
                      }
                      placeholder="Job Title"
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
                      placeholder="Company Size"
                      className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
                    />

                    <input
                      value={form.country}
                      onChange={(e) =>
                        updateField("country", e.target.value)
                      }
                      placeholder="Country"
                      className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
                    />
                  </div>

                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      updateField("message", e.target.value)
                    }
                    placeholder="Tell us about your compliance goals..."
                    className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
                  />

                  {error && (
                    <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary mt-2 justify-center disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Request Demo"}

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