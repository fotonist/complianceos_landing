"use client";

import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Link
        href="/demo"
        className="btn-primary inline-flex items-center gap-2"
      >
        <span>Request Demo</span>
        <ArrowRight size={18} />
      </Link>

      <Link
        href="/platform"
        className="btn-secondary inline-flex items-center gap-2"
      >
        <PlayCircle size={20} />
        <span>Watch Overview</span>
      </Link>
    </div>
  );
}