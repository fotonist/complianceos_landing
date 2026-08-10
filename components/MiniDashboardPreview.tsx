"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BrainCircuit,
  TriangleAlert,
  CheckCircle2,
  Activity,
} from "lucide-react";

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
    },
  }),
};

export default function MiniDashboardPreview() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={item}
      custom={0.25}
      className="relative"
    >
      <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-100 px-7 py-5">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              Executive Dashboard
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900">
              Compliance Health
            </h3>

          </div>

          <div className="rounded-2xl bg-emerald-50 px-5 py-3">

            <p className="text-xs uppercase tracking-wider text-emerald-600">
              Overall
            </p>

            <h2 className="text-3xl font-bold text-emerald-600">
              96%
            </h2>

          </div>

        </div>

        {/* KPIs */}

        <div className="grid grid-cols-2 gap-5 p-6">
		          <motion.div
            variants={item}
            custom={0.35}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-emerald-100 p-3">
                  <ShieldCheck
                    size={20}
                    className="text-emerald-600"
                  />
                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    Controls
                  </p>

                  <h4 className="text-2xl font-bold text-slate-900">
                    324
                  </h4>

                </div>

              </div>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                +12
              </span>

            </div>
          </motion.div>

          <motion.div
            variants={item}
            custom={0.45}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-red-100 p-3">
                  <TriangleAlert
                    size={20}
                    className="text-red-600"
                  />
                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    Open Risks
                  </p>

                  <h4 className="text-2xl font-bold text-slate-900">
                    18
                  </h4>

                </div>

              </div>

              <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                Critical
              </span>

            </div>
          </motion.div>

          <motion.div
            variants={item}
            custom={0.55}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-blue-100 p-3">
                <Activity
                  size={20}
                  className="text-blue-600"
                />
              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Evidence Coverage
                </p>

                <h4 className="text-2xl font-bold text-slate-900">
                  92%
                </h4>

              </div>

            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200">

              <div className="h-full w-[92%] rounded-full bg-blue-600" />

            </div>

          </motion.div>

          <motion.div
            variants={item}
            custom={0.65}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-violet-100 p-3">
                <BrainCircuit
                  size={20}
                  className="text-violet-600"
                />
              </div>

              <div>

                <p className="text-sm text-slate-500">
                  AI Confidence
                </p>

                <h4 className="text-2xl font-bold text-slate-900">
                  98%
                </h4>

              </div>

            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200">

              <div className="h-full w-[98%] rounded-full bg-violet-600" />

            </div>

          </motion.div>

        </div>

        {/* Framework Status */}

        <div className="border-t border-slate-100 px-7 py-6">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Framework Status
          </p>

          <div className="space-y-4">
		              {[
              {
                name: "ISO 27001",
                status: "Healthy",
              },
              {
                name: "ISO 9001",
                status: "Healthy",
              },
              {
                name: "SOC 2",
                status: "Healthy",
              },
              {
                name: "GDPR",
                status: "Review",
              },
            ].map((framework) => (
              <div
                key={framework.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">

                  <CheckCircle2
                    size={18}
                    className="text-emerald-500"
                  />

                  <span className="font-medium text-slate-700">
                    {framework.name}
                  </span>

                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    framework.status === "Healthy"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {framework.status}
                </span>
              </div>
            ))}

          </div>

        </div>

        {/* AI Summary */}

        <div className="border-t border-slate-100 bg-gradient-to-r from-blue-50 to-violet-50 px-7 py-6">

          <div className="flex items-start gap-4">

            <div className="rounded-2xl bg-white p-3 shadow-sm">

              <BrainCircuit
                size={22}
                className="text-blue-600"
              />

            </div>

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                AI Executive Summary
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Compliance posture remains strong across all
                active frameworks. Evidence coverage has
                improved by 8% this month. AI recommends
                prioritizing remediation of 3 critical risks
                before the next executive review.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Floating Accent */}

      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute -bottom-8 left-8 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl" />

    </motion.div>
  );
}