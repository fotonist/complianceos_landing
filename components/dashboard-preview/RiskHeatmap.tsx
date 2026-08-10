"use client";

import { AlertTriangle } from "lucide-react";

export interface RiskPoint {
  id: number | string;
  title: string;
  x?: number;
  y?: number;
  likelihood?: number;
  impact?: number;
  severity?: "low" | "medium" | "high" | "critical";
  level?: "low" | "medium" | "high" | "critical";
}

interface RiskHeatmapProps {
  risks: RiskPoint[];
}

const levelColor = {
  low: "bg-emerald-500",
  medium: "bg-amber-400",
  high: "bg-orange-500",
  critical: "bg-red-600",
};

const cellColors = [
  ["bg-emerald-50", "bg-emerald-50", "bg-emerald-100", "bg-amber-50", "bg-amber-100"],
  ["bg-emerald-50", "bg-emerald-100", "bg-amber-50", "bg-amber-100", "bg-orange-100"],
  ["bg-emerald-100", "bg-amber-50", "bg-amber-100", "bg-orange-100", "bg-red-100"],
  ["bg-amber-50", "bg-amber-100", "bg-orange-100", "bg-red-100", "bg-red-200"],
  ["bg-amber-100", "bg-orange-100", "bg-red-100", "bg-red-200", "bg-red-300"],
];

export default function RiskHeatmap({ risks }: RiskHeatmapProps) {
  return (
    <section className="mt-10 rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Enterprise Risk Matrix
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Likelihood × Impact
          </h2>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
          <AlertTriangle className="h-4 w-4" />
          {risks.length} Active Risks
        </div>
      </div>

      <div className="grid grid-cols-[60px_repeat(5,minmax(0,1fr))] gap-2">
        <div />

        {[1, 2, 3, 4, 5].map((impact) => (
          <div
            key={impact}
            className="pb-3 text-center text-xs font-semibold uppercase tracking-wider text-slate-500"
          >
            Impact {impact}
          </div>
        ))}

        {[5, 4, 3, 2, 1].map((likelihood, row) => (
          <div key={likelihood} className="contents">
            <div className="flex items-center justify-center text-xs font-semibold uppercase tracking-wider text-slate-500">
              {likelihood}
            </div>

            {[1, 2, 3, 4, 5].map((impact, col) => {
              const cellRisks = risks.filter((r) => {
                const l = r.likelihood ?? r.y;
                const i = r.impact ?? r.x;
                return l === likelihood && i === impact;
              });

              return (
                <div
                  key={`${likelihood}-${impact}`}
                  className={`relative flex aspect-square min-h-[90px] items-center justify-center rounded-2xl border border-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg ${cellColors[row][col]}`}
                >
                  {cellRisks.length === 0 && (
                    <span className="text-xs text-slate-300">—</span>
                  )}

                  <div className="flex flex-wrap justify-center gap-2">
                    {cellRisks.map((risk) => (
                      <div
                        key={risk.id}
                        title={risk.title}
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white shadow ${
                          levelColor[(risk.level ?? risk.severity ?? "low") as keyof typeof levelColor]
                        }`}
                      >
                        {risk.title.charAt(0)}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-emerald-500" />
          <span className="text-sm text-slate-600">Low</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="text-sm text-slate-600">Medium</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-orange-500" />
          <span className="text-sm text-slate-600">High</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-600" />
          <span className="text-sm text-slate-600">Critical</span>
        </div>
      </div>
    </section>
  );
}