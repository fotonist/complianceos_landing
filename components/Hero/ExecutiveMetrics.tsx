"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  AlertTriangle,
  FileCheck,
  Activity,
  TrendingUp,
  Sparkles,
} from "lucide-react";

interface MetricCard {
  title: string;
  value: string;
  subtitle: string;
  color: string;
  icon: React.ReactNode;
}

const metrics: MetricCard[] = [
  {
    title: "Compliance Health",
    value: "96%",
    subtitle: "Excellent",
    color: "emerald",
    icon: <ShieldCheck size={22} />,
  },
  {
    title: "Risk Exposure",
    value: "27",
    subtitle: "Low",
    color: "amber",
    icon: <AlertTriangle size={22} />,
  },
  {
    title: "Evidence Quality",
    value: "94%",
    subtitle: "Verified",
    color: "blue",
    icon: <FileCheck size={22} />,
  },
  {
    title: "Audit Readiness",
    value: "98%",
    subtitle: "Ready",
    color: "violet",
    icon: <Activity size={22} />,
  },
  {
    title: "UEE Score",
    value: "18",
    subtitle: "Healthy",
    color: "cyan",
    icon: <TrendingUp size={22} />,
  },
  {
    title: "AI Confidence",
    value: "99%",
    subtitle: "High",
    color: "pink",
    icon: <Sparkles size={22} />,
  },
];

const colorMap = {
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-200",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-200",
  },
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-200",
  },
  cyan: {
    bg: "bg-cyan-50",
    text: "text-cyan-600",
    border: "border-cyan-200",
  },
  pink: {
    bg: "bg-pink-50",
    text: "text-pink-600",
    border: "border-pink-200",
  },
};

export default function ExecutiveMetrics() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {metrics.map((metric, index) => {
        const colors =
          colorMap[metric.color as keyof typeof colorMap];

        return (
          <motion.div
            key={metric.title}
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
              delay: index * 0.08,
              duration: 0.5,
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            className={`rounded-3xl border ${colors.border}
                        bg-white p-6 shadow-sm
                        transition-all duration-300
                        hover:shadow-xl`}
          >
            <div className="flex items-center justify-between">
              <div
                className={`rounded-2xl p-3 ${colors.bg} ${colors.text}`}
              >
                {metric.icon}
              </div>

              <span
                className={`text-xs font-semibold uppercase tracking-widest ${colors.text}`}
              >
                LIVE
              </span>
            </div>

            <p className="mt-6 text-sm font-medium text-slate-500">
              {metric.title}
            </p>

            <h2 className="mt-2 text-4xl font-bold text-slate-900">
              {metric.value}
            </h2>

            <div className="mt-5 h-2 rounded-full bg-slate-200">
              <div
                className={`h-2 rounded-full ${colors.bg.replace(
                  "50",
                  "500"
                )}`}
                style={{
                  width:
                    metric.value.includes("%")
                      ? metric.value
                      : "72%",
                }}
              />
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Status
              </span>

              <span
                className={`font-semibold ${colors.text}`}
              >
                {metric.subtitle}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}