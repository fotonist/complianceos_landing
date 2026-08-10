"use client";

import { motion } from "framer-motion";

import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import MiniDashboardPreview from "./MiniDashboardPreview";

const frameworks = [
  "ISO 27001",
  "ISO 9001",
  "ISO 22301",
  "SOC 2",
  "GDPR",
  "NIST",
];

export default function Hero() {
  return (
    <section className="hero-bg relative overflow-hidden">

      <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-[140px]" />

      <div className="absolute right-[-120px] top-[120px] h-[380px] w-[380px] rounded-full bg-violet-500/15 blur-[140px]" />

      <div className="container relative z-10 pt-14 pb-24 lg:pt-32 lg:pb-32">
        <div className="grid items-center gap-24 xl:grid-cols-[1.08fr_0.92fr]">
          {/* LEFT */}
          <div>
           <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0,
  }}
>
  <HeroBadge />
</motion.div>

            <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.15,
  }}
  className="mt-6 max-w-4xl text-6xl font-black leading-[0.92] tracking-tight text-slate-900 xl:text-7xl"
>
              Compliance
              <br />
              Intelligence
              <br />
              OS Pro
            </motion.h1>

            <motion.p
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.3,
  }}
  className="mt-8 max-w-xl text-lg leading-8 text-slate-600 xl:text-xl"
>
              The AI-Powered Operating System for Governance,
              Risk, Compliance and Audit.
              <br />
              <br />
              Transform fragmented compliance activities into a
              unified intelligence platform that enables
              executives, auditors and compliance teams to make
              faster, data-driven decisions.
            </motion.p>

            <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.45,
  }}
  className="mt-12"
>
  <HeroButtons />
</motion.div>

           <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.6,
  }}
  className="mt-14"
>
  <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
    Supported Frameworks
  </p>

  <div className="flex flex-wrap gap-3">
    {frameworks.map((item) => (
      <span
        key={item}
        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
      >
        {item}
      </span>
    ))}
  </div>
</motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.35,
  }}
  className="relative flex items-center justify-center xl:justify-end"
>
  <div className="w-full max-w-[520px] xl:max-w-[560px]">
    <MiniDashboardPreview />
  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
}