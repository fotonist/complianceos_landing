"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  TrendingDown,
  AlertTriangle,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

const insights = [
  {
    title: "Compliance Health Increased",
    value: "+6%",
    description:
      "Overall compliance posture improved compared with the previous assessment cycle.",
    color: "emerald",
    icon: ShieldCheck,
  },
  {
    title: "Risk Exposure Reduced",
    value: "-18%",
    description:
      "Critical risks have decreased following remediation and evidence validation.",
    color: "amber",
    icon: TrendingDown,
  },
  {
    title: "Immediate Attention",
    value: "3",
    description:
      "Three critical findings require executive review before the next audit.",
    color: "rose",
    icon: AlertTriangle,
  },
];

const recommendations = [
  "Approve pending evidence for ISO 27001 Annex A controls.",
  "Complete overdue remediation tasks before the quarterly audit.",
  "Increase evidence collection frequency for high-risk assets.",
  "Review supplier compliance exceptions.",
];

export default function ExecutiveNarrative() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-xl">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-violet-50" />

      <div className="relative p-10">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="flex items-center gap-4"
        >

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg">
            <BrainCircuit size={28} />
          </div>

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              AI Executive Intelligence
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              Executive Narrative
            </h2>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .25 }}
          viewport={{ once: true }}
          className="mt-8 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-600 to-violet-600 p-8 text-white"
        >

          <div className="flex items-center gap-3">

            <Sparkles size={24} />

            <h3 className="text-xl font-semibold">
              AI Generated Executive Summary
            </h3>

          </div>

          <p className="mt-6 text-lg leading-9 text-blue-50">
            Compliance Intelligence OS has analyzed the current governance,
            risk, evidence and control landscape.
            Overall compliance posture is stable and improving.
            Risk exposure continues to decrease while evidence quality and
            audit readiness remain above enterprise targets.
            Three critical findings still require executive attention before
            the upcoming audit cycle.
          </p>

        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">

          {insights.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * .12,
                }}
                whileHover={{
                  y: -6,
                }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl"
              >

                <div className={`inline-flex rounded-2xl p-3
                  ${
                    item.color === "emerald"
                      ? "bg-emerald-100 text-emerald-600"
                      : item.color === "amber"
                      ? "bg-amber-100 text-amber-600"
                      : "bg-rose-100 text-rose-600"
                  }`}
                >

                  <Icon size={24} />

                </div>

                <p className="mt-6 text-sm uppercase tracking-widest text-slate-500">
                  {item.title}
                </p>

                <h3 className="mt-2 text-4xl font-bold text-slate-900">
                  {item.value}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

              </motion.div>

            );

          })}

        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .4,
          }}
          className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-8"
        >

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-2xl font-bold text-slate-900">
                AI Recommendations
              </h3>

              <p className="mt-2 text-slate-500">
                Highest priority actions identified by the intelligence engine.
              </p>

            </div>

            <div className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white">
              Priority Queue
            </div>

          </div>

          <div className="mt-8 space-y-4">

            {recommendations.map((item, index) => (

              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: .55 + index * .1,
                }}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    {index + 1}
                  </div>

                  <p className="font-medium text-slate-700">
                    {item}
                  </p>

                </div>

                <ArrowRight
                  size={20}
                  className="text-slate-400"
                />

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}