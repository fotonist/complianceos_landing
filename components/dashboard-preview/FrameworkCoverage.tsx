"use client";

import {
  ShieldCheck,
  CircleCheckBig,
  AlertTriangle,
  FileCheck2,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

export interface FrameworkCoverageItem {
  id: string;
  name: string;
  version?: string;
  score: number;
  controls: number;
  implemented: number;
  evidenceCoverage: number;
  maturity: number;
  status: "healthy" | "attention" | "critical";
}

export interface FrameworkCoverageProps {
  frameworks: FrameworkCoverageItem[];
}

function StatusBadge({
  status,
}: {
  status: FrameworkCoverageItem["status"];
}) {
  switch (status) {
    case "healthy":
      return (
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
          Healthy
        </span>
      );

    case "attention":
      return (
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
          Attention
        </span>
      );

    default:
      return (
        <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
          Critical
        </span>
      );
  }
}

function CircularScore({
  value,
}: {
  value: number;
}) {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference -
    (value / 100) * circumference;

  return (
    <svg
      viewBox="0 0 120 120"
      className="h-24 w-24"
    >
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#E2E8F0"
        strokeWidth="10"
        fill="none"
      />

      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#2563EB"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90 60 60)"
      />

      <text
        x="60"
        y="66"
        textAnchor="middle"
        className="fill-slate-900 text-2xl font-bold"
      >
        {value}
      </text>

      <text
        x="60"
        y="82"
        textAnchor="middle"
        className="fill-slate-500 text-[9px]"
      >
        %
      </text>
    </svg>
  );
}

export default function FrameworkCoverage({
  frameworks,
}: FrameworkCoverageProps) {
  return (
    <section className="mt-10">

      <div className="mb-7 flex items-end justify-between">

        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Framework Intelligence
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">
            Compliance Framework Coverage
          </h2>

        </div>

      </div>

      <div className="grid gap-6 xl:grid-cols-2">

        {frameworks.map((framework) => {

          const implemented =
            framework.controls === 0
              ? 0
              : Math.round(
                  (framework.implemented /
                    framework.controls) *
                    100
                );

          return (
            <div
              key={framework.id}
              className="group rounded-[28px] border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">

                <div>

                  <div className="flex items-center gap-3">

                    <ShieldCheck className="h-5 w-5 text-blue-600" />

                    <h3 className="text-xl font-bold text-slate-900">
                      {framework.name}
                    </h3>

                    {framework.version && (
                      <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
                        {framework.version}
                      </span>
                    )}

                  </div>

                  <div className="mt-4">
                    <StatusBadge status={framework.status} />
                  </div>

                </div>

                <CircularScore value={framework.score} />

              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">

                <div className="rounded-2xl bg-slate-50 p-5">

                  <div className="flex items-center gap-2 text-slate-600">

                    <CircleCheckBig className="h-4 w-4" />

                    <span className="text-sm font-medium">
                      Controls
                    </span>

                  </div>

                  <div className="mt-3 text-2xl font-bold text-slate-900">
                    {framework.implemented} / {framework.controls}
                  </div>

                  <div className="mt-4 h-2 rounded-full bg-slate-200">

                    <div
                      className="h-2 rounded-full bg-blue-600"
                      style={{
                        width: `${implemented}%`,
                      }}
                    />

                  </div>

                </div>

                <div className="rounded-2xl bg-slate-50 p-5">

                  <div className="flex items-center gap-2 text-slate-600">

                    <FileCheck2 className="h-4 w-4" />

                    <span className="text-sm font-medium">
                      Evidence Coverage
                    </span>

                  </div>

                  <div className="mt-3 text-2xl font-bold text-slate-900">
                    {framework.evidenceCoverage}%
                  </div>

                  <div className="mt-4 h-2 rounded-full bg-slate-200">

                    <div
                      className="h-2 rounded-full bg-emerald-500"
                      style={{
                        width: `${framework.evidenceCoverage}%`,
                      }}
                    />

                  </div>

                </div>

                <div className="rounded-2xl bg-slate-50 p-5">

                  <div className="flex items-center gap-2 text-slate-600">

                    <BarChart3 className="h-4 w-4" />

                    <span className="text-sm font-medium">
                      Maturity
                    </span>

                  </div>

                  <div className="mt-3 text-2xl font-bold text-slate-900">
                    {framework.maturity}%
                  </div>

                  <div className="mt-4 h-2 rounded-full bg-slate-200">

                    <div
                      className="h-2 rounded-full bg-violet-500"
                      style={{
                        width: `${framework.maturity}%`,
                      }}
                    />

                  </div>

                </div>

                <div className="rounded-2xl bg-slate-50 p-5">

                  <div className="flex items-center gap-2 text-slate-600">

                    <ArrowUpRight className="h-4 w-4" />

                    <span className="text-sm font-medium">
                      Readiness
                    </span>

                  </div>

                  <div className="mt-3 text-2xl font-bold text-slate-900">
                    {framework.score}%
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Enterprise readiness calculated from
                    control implementation,
                    evidence quality and maturity.
                  </p>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}