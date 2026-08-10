"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const platform = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
];

const resources = [
  { label: "Resources", href: "/resources" },
  { label: "Documentation", href: "/documentation" },
  { label: "Blog", href: "#" },
  { label: "Support", href: "/support" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container py-20">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-blue-500/30">
                CI
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  ComplianceOS
                </h3>

                <p className="text-sm text-slate-500">
                  Compliance Intelligence Platform
                </p>
              </div>
            </Link>

            <p className="mt-8 max-w-md text-slate-600 leading-8">
              AI-powered Governance, Risk, Compliance and Audit
              platform designed for enterprise organizations.
            </p>

            <Link
              href="/demo"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
            >
              Request Demo
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Platform */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
              Platform
            </h4>

            <ul className="space-y-4">
              {platform.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-600 transition hover:text-slate-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
              Resources
            </h4>

            <ul className="space-y-4">
              {resources.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-600 transition hover:text-slate-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} ComplianceOS. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}