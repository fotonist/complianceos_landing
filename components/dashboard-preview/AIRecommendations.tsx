"use client";

import {
  BrainCircuit,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
  Clock3,
} from "lucide-react";

export interface AIRecommendation {
  id: string;
  title: string;
  description: string;
  priority: "critical" | "high" | "medium" | "low";
  impact: number;
  confidence: number;
  category: string;
  estimatedDays: number;
}

export interface AIRecommendationsProps {
  recommendations: AIRecommendation[];
}

const priorityStyle = {
  critical: {
    badge: "bg-red-100 text-red-700",
    bar: "bg-red-600",
  },
  high: {
    badge: "bg-orange-100 text-orange-700",
    bar: "bg-orange-500",
  },
  medium: {
    badge: "bg-amber-100 text-amber-700",
    bar: "bg-amber-500",
  },
  low: {
    badge: "bg-emerald-100 text-emerald-700",
    bar: "bg-emerald-500",
  },
};

export default function AIRecommendations({
  recommendations,
}: AIRecommendationsProps) {
  return (
    <section className="mt-10 overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl">

      <div className="relative">

        <div className="absolute right-[-140px] top-[-120px] h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute bottom-[-120px] left-[-120px] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative p-8 lg:p-10">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2">

                <BrainCircuit className="h-4 w-4 text-cyan-300" />

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                  AI Executive Intelligence
                </span>

              </div>

              <h2 className="mt-5 text-4xl font-black tracking-tight">
                Recommended Next Actions
              </h2>

              <p className="mt-4 max-w-3xl text-slate-300 leading-8">
                AI continuously evaluates enterprise compliance posture,
                evidence quality, framework maturity and operational exposure to
                recommend the next highest-value actions.
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur">

              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Active Recommendations
              </p>

              <div className="mt-3 text-5xl font-black">
                {recommendations.length}
              </div>

            </div>

          </div>

          <div className="mt-10 space-y-5">

            {recommendations.map((item) => {

              const style = priorityStyle[item.priority];

              return (

                <div
                  key={item.id}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
                >

                  <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">

                    <div className="flex-1">

                      <div className="flex flex-wrap items-center gap-3">

                        <h3 className="text-xl font-bold">
                          {item.title}
                        </h3>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}
                        >
                          {item.priority.toUpperCase()}
                        </span>

                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-300">
                          {item.category}
                        </span>

                      </div>

                      <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                        {item.description}
                      </p>

                    </div>

                    <ArrowRight className="hidden h-5 w-5 text-slate-500 xl:block" />

                  </div>

                  <div className="mt-8 grid gap-5 md:grid-cols-3">

                    <div className="rounded-2xl bg-white/5 p-5">

                      <div className="flex items-center gap-2 text-cyan-300">

                        <Sparkles className="h-4 w-4" />

                        <span className="text-sm font-medium">
                          Business Impact
                        </span>

                      </div>

                      <div className="mt-3 text-3xl font-black">
                        {item.impact}%
                      </div>

                      <div className="mt-4 h-2 rounded-full bg-white/10">

                        <div
                          className={`h-2 rounded-full ${style.bar}`}
                          style={{
                            width: `${item.impact}%`,
                          }}
                        />

                      </div>

                    </div>

                    <div className="rounded-2xl bg-white/5 p-5">

                      <div className="flex items-center gap-2 text-cyan-300">

                        <CheckCircle2 className="h-4 w-4" />

                        <span className="text-sm font-medium">
                          AI Confidence
                        </span>

                      </div>

                      <div className="mt-3 text-3xl font-black">
                        {item.confidence}%
                      </div>

                      <div className="mt-4 h-2 rounded-full bg-white/10">

                        <div
                          className="h-2 rounded-full bg-cyan-400"
                          style={{
                            width: `${item.confidence}%`,
                          }}
                        />

                      </div>

                    </div>

                    <div className="rounded-2xl bg-white/5 p-5">

                      <div className="flex items-center gap-2 text-cyan-300">

                        <Clock3 className="h-4 w-4" />

                        <span className="text-sm font-medium">
                          Estimated Time
                        </span>

                      </div>

                      <div className="mt-3 text-3xl font-black">
                        {item.estimatedDays}
                        <span className="ml-1 text-base font-medium text-slate-400">
                          days
                        </span>
                      </div>

                      <div className="mt-5 flex items-center gap-2 text-sm text-slate-300">

                        {item.priority === "critical" ? (
                          <AlertTriangle className="h-4 w-4 text-red-400" />
                        ) : (
                          <ShieldCheck className="h-4 w-4 text-emerald-400" />
                        )}

                        Executive execution recommended.

                      </div>

                    </div>

                  </div>

                </div>

              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}