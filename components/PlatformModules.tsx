"use client";

import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  FileCheck2,
  Gauge,
  Layers3,
  Network,
  Radar,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const modules = [
  {
    icon: ShieldCheck,
    eyebrow: "GOVERNANCE",
    title: "Compliance Intelligence",
    description:
      "Build a unified compliance structure across standards, clauses, requirements and controls.",
    features: [
      "Control & Matrix Intelligence",
      "Framework and standard management",
      "Coverage and implementation visibility",
    ],
    href: "/platform/compliance",
  },
  {
    icon: Radar,
    eyebrow: "RISK",
    title: "Risk Intelligence",
    description:
      "Connect enterprise risks to controls, evidence and remediation priorities for a complete risk picture.",
    features: [
      "Risk scoring and exposure analysis",
      "Control-risk relationships",
      "Risk intelligence and escalation",
    ],
    href: "/platform/risk",
  },
  {
    icon: FileCheck2,
    eyebrow: "EVIDENCE",
    title: "Evidence Intelligence",
    description:
      "Manage evidence throughout its lifecycle and turn evidence quality into measurable compliance intelligence.",
    features: [
      "Evidence Library",
      "Approval and review workflow",
      "Evidence-to-risk and control linkage",
    ],
    href: "/platform/evidence",
  },
  {
    icon: Workflow,
    eyebrow: "EXECUTION",
    title: "Remediation & Task Engine",
    description:
      "Convert identified gaps and risks into accountable remediation work with operational visibility.",
    features: [
      "Remediation tasks",
      "Priority and due-date tracking",
      "Evidence-linked execution",
    ],
    href: "/platform/execution",
  },
  {
    icon: Gauge,
    eyebrow: "MATURITY",
    title: "Maturity Intelligence",
    description:
      "Track practices, process areas and evidence to understand organizational maturity beyond simple compliance.",
    features: [
      "Maturity practice tracking",
      "Process-area assessment",
      "Evidence-backed maturity visibility",
    ],
    href: "/platform/maturity",
  },
  {
    icon: BrainCircuit,
    eyebrow: "AI",
    title: "Executive Intelligence",
    description:
      "Transform operational compliance data into executive-level health, exposure and priority intelligence.",
    features: [
      "Executive Intelligence",
      "Executive Readiness",
      "AI summaries and recommendations",
    ],
    href: "/platform/dashboard",
  },
];

const intelligenceLayers = [
  {
    icon: Layers3,
    title: "Unified Data Layer",
    text: "Standards, controls, risks, evidence, tasks, processes and maturity records work as one connected compliance model.",
  },
  {
    icon: Network,
    title: "Relationship Intelligence",
    text: "The platform connects risks, controls, evidence, processes and remediation so decisions are based on context rather than isolated records.",
  },
  {
    icon: Sparkles,
    title: "AI Decision Layer",
    text: "AI turns compliance signals into prioritized observations, findings, recommendations and executive insights.",
  },
];

export default function PlatformModules() {
  return (
    <>
      <section className="relative overflow-hidden border-t border-slate-200 bg-white py-24 lg:py-32">
        <div className="absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute right-[-160px] bottom-0 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[140px]" />

        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">
              Platform Architecture
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 lg:text-6xl">
              One platform.
              <br />
              Every compliance intelligence layer.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              ComplianceOS connects governance, risk, evidence, execution,
              maturity and executive intelligence inside a single operating
              model.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {modules.map((module) => {
              const Icon = module.icon;

              return (
                <Link
                  key={module.title}
                  href={module.href}
                  className="group rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
                      <Icon size={25} />
                    </div>

                    <ArrowRight
                      size={20}
                      className="mt-2 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-blue-600"
                    />
                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                    {module.eyebrow}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                    {module.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {module.description}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                    {module.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-sm text-slate-700"
                      >
                        <CheckCircle2
                          size={16}
                          className="shrink-0 text-emerald-500"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-24 text-white lg:py-32">
        <div className="absolute left-1/2 top-[-250px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[150px]" />

        <div className="container relative">
          <div className="grid items-center gap-14 xl:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Intelligence Architecture
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight lg:text-5xl">
                From compliance records to executive decisions.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                The platform is designed as a connected intelligence system:
                operational records create signals, relationships create
                context, and AI turns that context into decisions.
              </p>

              <Link
                href="/platform/dashboard"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:scale-[1.02]"
              >
                Explore Executive Intelligence
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-5">
              {intelligenceLayers.map((layer, index) => {
                const Icon = layer.icon;

                return (
                  <div
                    key={layer.title}
                    className="rounded-[26px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl"
                  >
                    <div className="flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
                        <Icon size={22} />
                      </div>

                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold tracking-[0.2em] text-slate-500">
                            0{index + 1}
                          </span>
                          <h3 className="text-xl font-bold">
                            {layer.title}
                          </h3>
                        </div>

                        <p className="mt-3 text-sm leading-7 text-slate-300">
                          {layer.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-24 lg:py-32">
        <div className="rounded-[36px] border border-slate-200 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-8 text-white shadow-2xl lg:p-12">
          <div className="grid items-center gap-10 xl:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-100">
                <ShieldAlert size={18} />
                Enterprise Compliance Operating System
              </div>

              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight lg:text-5xl">
                Move from fragmented compliance activity to connected
                intelligence.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50/90">
                Give compliance teams one operating environment for
                governance, risk, evidence, remediation and executive
                decision-making.
              </p>
            </div>

            <Link
              href="/platform/dashboard"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 font-bold text-blue-700 shadow-xl transition hover:-translate-y-1"
            >
              See the Platform
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}