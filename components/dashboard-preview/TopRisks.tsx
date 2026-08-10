"use client";

import {
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  ShieldAlert,
  User,
  Sparkles,
} from "lucide-react";

export interface TopRisk {
  id: string;
  title: string;
  framework: string;
  owner: string;
  score: number;
  trend: "up" | "down";
  aiPriority: number;
  dueDate: string;
}

export interface TopRisksProps {
  risks: TopRisk[];
}

function RiskScore({
  score,
}: {
  score: number;
}) {
  let color =
    "bg-emerald-500";

  if (score >= 85)
    color = "bg-red-600";
  else if (score >= 65)
    color = "bg-orange-500";
  else if (score >= 40)
    color = "bg-amber-500";

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-white font-bold shadow-lg">
      <div
        className={`flex h-full w-full items-center justify-center rounded-2xl ${color}`}
      >
        {score}
      </div>
    </div>
  );
}

export default function TopRisks({
  risks,
}: TopRisksProps) {
  return (
    <section className="mt-10 rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.20em] text-slate-500">
            Executive Risk View
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Top Enterprise Risks
          </h2>

        </div>

        <div className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
          {risks.length} High Priority
        </div>

      </div>

      <div className="space-y-5">

        {risks.map((risk) => (

          <div
            key={risk.id}
            className="group rounded-3xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
          >

            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

              <div className="flex items-start gap-5">

                <RiskScore score={risk.score} />

                <div>

                  <div className="flex flex-wrap items-center gap-3">

                    <h3 className="text-xl font-bold text-slate-900">
                      {risk.title}
                    </h3>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {risk.framework}
                    </span>

                  </div>

                  <div className="mt-4 flex flex-wrap gap-6 text-sm text-slate-500">

                    <div className="flex items-center gap-2">

                      <User className="h-4 w-4" />

                      {risk.owner}

                    </div>

                    <div className="flex items-center gap-2">

                      <ShieldAlert className="h-4 w-4" />

                      Due {risk.dueDate}

                    </div>

                  </div>

                </div>

              </div>

              <div className="grid gap-4 sm:grid-cols-3">

                <div className="rounded-2xl bg-slate-50 px-5 py-4">

                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    AI Priority
                  </p>

                  <div className="mt-2 flex items-center gap-2">

                    <Sparkles className="h-4 w-4 text-violet-600" />

                    <span className="text-2xl font-bold">
                      {risk.aiPriority}
                    </span>

                  </div>

                </div>

                <div className="rounded-2xl bg-slate-50 px-5 py-4">

                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Trend
                  </p>

                  <div className="mt-2 flex items-center gap-2">

                    {risk.trend === "down" ? (
                      <>
                        <ArrowDownRight className="h-5 w-5 text-emerald-600" />
                        <span className="font-bold text-emerald-600">
                          Improving
                        </span>
                      </>
                    ) : (
                      <>
                        <ArrowUpRight className="h-5 w-5 text-red-600" />
                        <span className="font-bold text-red-600">
                          Escalating
                        </span>
                      </>
                    )}

                  </div>

                </div>

                <div className="rounded-2xl bg-slate-50 px-5 py-4">

                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Risk Score
                  </p>

                  <div className="mt-2 flex items-center gap-2">

                    <AlertTriangle className="h-5 w-5 text-red-600" />

                    <span className="text-2xl font-bold">
                      {risk.score}
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}