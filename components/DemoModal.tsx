"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface DemoModalProps {
  open: boolean;
  onClose: () => void;
}

export default function DemoModal({
  open,
  onClose,
}: DemoModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    setSuccess(true);
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
              className="rounded-[32px] border border-white/20 bg-white/90 p-10 shadow-2xl backdrop-blur-2xl"
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
                  onClick={onClose}
                  className="rounded-xl p-2 transition hover:bg-slate-100"
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
                      placeholder="Full Name"
                      className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
                    />

                    <input
                      required
                      type="email"
                      placeholder="Business Email"
                      className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
                    />

                    <input
                      placeholder="Company"
                      className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
                    />

                    <input
                      placeholder="Job Title"
                      className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
                    />

                    <input
                      placeholder="Company Size"
                      className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
                    />

                    <input
                      placeholder="Country"
                      className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
                    />
                  </div>

                  <textarea
                    rows={5}
                    placeholder="Tell us about your compliance goals..."
                    className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary mt-2 justify-center"
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