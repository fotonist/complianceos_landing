"use client";

import {
  CalendarClock,
  CheckCircle2,
  Clock3,
  AlertTriangle,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  owner: string;
  date: string;
  status: "completed" | "active" | "planned" | "risk";
  framework?: string;
}

export interface ExecutiveTimelineProps {
  events: TimelineEvent[];
}

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    dot: "bg-emerald-500",
    badge: "bg-emerald-100 text-emerald-700",
    text: "Completed",
  },
  active: {
    icon: Clock3,
    dot: "bg-blue-600",
    badge: "bg-blue-100 text-blue-700",
    text: "In Progress",
  },
  planned: {
    icon: CalendarClock,
    dot: "bg-slate-500",
    badge: "bg-slate-100 text-slate-700",
    text: "Planned",
  },
  risk: {
    icon: AlertTriangle,
    dot: "bg-red-600",
    badge: "bg-red-100 text-red-700",
    text: "Attention",
  },
};

export default function ExecutiveTimeline({
  events,
}: ExecutiveTimelineProps) {
  return (
    <section className="mt-10 rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.20em] text-slate-500">
            Executive Timeline
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Governance Activity
          </h2>

        </div>

        <div className="flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">

          <Sparkles className="h-4 w-4" />

          AI Prioritized

        </div>

      </div>

      <div className="relative">

        <div className="absolute bottom-0 left-[22px] top-0 w-px bg-slate-200" />

        <div className="space-y-8">

          {events.map((event) => {

            const config = statusConfig[event.status];
            const Icon = config.icon;

            return (

              <div
                key={event.id}
                className="relative flex gap-6"
              >

                <div
                  className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full ${config.dot} text-white shadow-lg`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div className="flex-1 rounded-3xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">

                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                    <div>

                      <div className="flex flex-wrap items-center gap-3">

                        <h3 className="text-xl font-bold text-slate-900">
                          {event.title}
                        </h3>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${config.badge}`}
                        >
                          {config.text}
                        </span>

                        {event.framework && (
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                            {event.framework}
                          </span>
                        )}

                      </div>

                      <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                        {event.description}
                      </p>

                    </div>

                    <ChevronRight className="hidden h-5 w-5 text-slate-300 lg:block" />

                  </div>

                  <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-500">

                    <div>
                      <span className="font-semibold text-slate-700">
                        Owner:
                      </span>{" "}
                      {event.owner}
                    </div>

                    <div>
                      <span className="font-semibold text-slate-700">
                        Date:
                      </span>{" "}
                      {event.date}
                    </div>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}