"use client";

import { Activity, BrainCircuit, CalendarClock, CheckCircle2, ShieldCheck, TrendingUp } from "lucide-react";

export interface ExecutiveHeaderProps {
  score: number;
  status: string;
  lastSync: string;

  organization?: string;
  reportingPeriod?: string;

  riskTrend?: number;
  complianceTrend?: number;

  aiConfidence?: number;

  frameworks?: number;
  controls?: number;
  evidences?: number;

  loading?: boolean;
}

function Metric({
  label,
  value,
  icon,
}: {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            {label}
          </p>

          <p className="mt-2 text-xl font-bold tracking-tight text-slate-900">
            {value}
          </p>

        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
          {icon}
        </div>

      </div>

    </div>
  );
}

export default function ExecutiveHeader({
  score,
  status,
  lastSync,
  organization = "Enterprise Workspace",
  reportingPeriod = "Last 30 Days",
  riskTrend = -18,
  complianceTrend = 7.8,
  aiConfidence = 98,
  frameworks = 12,
  controls = 624,
  evidences = 1842,
  loading = false,
}: ExecutiveHeaderProps) {
  const statusStyle =
    score >= 90
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : score >= 75
      ? "bg-amber-50 text-amber-700 border-amber-200"
      : "bg-red-50 text-red-700 border-red-200";

  if (loading) {
    return (
      <div className="mb-10 animate-pulse rounded-[30px] border border-slate-200 bg-white p-8">
        <div className="h-10 w-72 rounded-xl bg-slate-200" />
        <div className="mt-6 h-24 rounded-2xl bg-slate-100" />
      </div>
    );
  }

  return (
    <section className="mb-10 overflow-hidden rounded-[30px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 shadow-xl">

      <div className="relative overflow-hidden">

        <div className="absolute right-[-120px] top-[-120px] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute left-[-80px] bottom-[-80px] h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative p-8 lg:p-10">

          <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">

            {/* LEFT */}

            <div className="max-w-3xl">

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2">

                <ShieldCheck className="h-4 w-4 text-blue-600" />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Executive Compliance Center
                </span>

              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 lg:text-6xl">
                Compliance Intelligence
              </h1>

              <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-600">
                Unified executive visibility across governance, risk,
                compliance, evidence intelligence and AI-driven operational
                readiness.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">

                <div className="rounded-3xl bg-slate-900 px-8 py-5 text-white shadow-xl">

                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Overall Score
                  </div>

                  <div className="mt-2 flex items-end gap-2">

                    <span className="text-6xl font-black">
                      {score}
                    </span>

                    <span className="pb-2 text-2xl font-bold">
                      %
                    </span>

                  </div>

                </div>

                <div className={`rounded-full border px-5 py-3 text-sm font-bold ${statusStyle}`}>
                  {status}
                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="grid w-full max-w-xl gap-4 sm:grid-cols-2">
			              <Metric
                label="Organization"
                value={organization}
                icon={<ShieldCheck className="h-5 w-5" />}
              />

              <Metric
                label="Reporting Period"
                value={reportingPeriod}
                icon={<CalendarClock className="h-5 w-5" />}
              />

              <Metric
                label="AI Confidence"
                value={`${aiConfidence}%`}
                icon={<BrainCircuit className="h-5 w-5" />}
              />

              <Metric
                label="Last Sync"
                value={lastSync}
                icon={<Activity className="h-5 w-5" />}
              />

            </div>

          </div>

          {/* Executive KPI Strip */}

          <div className="mt-10 grid gap-5 xl:grid-cols-4">

            <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 backdrop-blur">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Risk Trend
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-emerald-600">
                    {riskTrend}%
                  </h3>

                </div>

                <div className="rounded-2xl bg-emerald-100 p-4">
                  <TrendingUp className="h-6 w-6 text-emerald-700" />
                </div>

              </div>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Critical exposure continues to decrease across monitored
                business processes.
              </p>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 backdrop-blur">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Compliance Growth
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-blue-600">
                    +{complianceTrend}%
                  </h3>

                </div>

                <div className="rounded-2xl bg-blue-100 p-4">
                  <CheckCircle2 className="h-6 w-6 text-blue-700" />
                </div>

              </div>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Continuous improvement initiatives are exceeding quarterly
                objectives.
              </p>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/70 p-6">

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Active Frameworks
              </p>

              <h3 className="mt-4 text-5xl font-black text-slate-900">
                {frameworks}
              </h3>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                  style={{
                    width: `${Math.min(frameworks * 8, 100)}%`,
                  }}
                />

              </div>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/70 p-6">

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Managed Controls
              </p>

              <h3 className="mt-4 text-5xl font-black text-slate-900">
                {controls}
              </h3>

              <p className="mt-5 text-sm text-slate-500">
                Supported by{" "}
                <span className="font-semibold text-slate-800">
                  {evidences.toLocaleString()}
                </span>{" "}
                verified evidence records.
              </p>

            </div>

          </div>

          {/* AI Executive Summary */}

          <div className="mt-10 rounded-[28px] border border-blue-100 bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-xl">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-3xl">

                <div className="flex items-center gap-3">

                  <BrainCircuit className="h-6 w-6" />

                  <span className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-100">
                    Executive AI Summary
                  </span>

                </div>

                <h2 className="mt-5 text-3xl font-black">
                  Compliance posture remains strong with controlled enterprise
                  risk.
                </h2>

                <p className="mt-4 max-w-2xl text-blue-100 leading-8">
                  AI detected positive evidence growth, declining critical risk,
                  and stable framework maturity. Current recommendation is to
                  prioritize supplier risk remediation and complete remaining
                  high-impact control validations before the next executive
                  review cycle.
                </p>

              </div>
			                <div className="flex w-full max-w-md flex-col gap-5">

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

                  <div className="flex items-center justify-between">

                    <span className="text-sm font-medium text-blue-100">
                      Enterprise Readiness
                    </span>

                    <span className="text-xl font-black">
                      {score}%
                    </span>

                  </div>

                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/20">

                    <div
                      className="h-full rounded-full bg-white transition-all duration-700"
                      style={{
                        width: `${score}%`,
                      }}
                    />

                  </div>

                </div>

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

                  <div className="mb-4 flex items-center justify-between">

                    <span className="text-sm font-medium text-blue-100">
                      Executive Highlights
                    </span>

                    <BrainCircuit className="h-5 w-5" />

                  </div>

                  <ul className="space-y-3 text-sm leading-7 text-blue-50">

                    <li>
                      ✓ No framework is currently below the corporate
                      compliance threshold.
                    </li>

                    <li>
                      ✓ Risk exposure continues to decrease month over month.
                    </li>

                    <li>
                      ✓ Evidence quality index reached its highest value this
                      quarter.
                    </li>

                    <li>
                      ✓ Executive attention required for only three critical
                      findings.
                    </li>

                  </ul>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}