"use client";

import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";

const menu = [
  { title: "Platform", href: "#" },
  { title: "Solutions", href: "#" },
  { title: "Industries", href: "#" },
  { title: "Pricing", href: "#" },
  { title: "Resources", href: "#" },
];

interface NavbarProps {
  onRequestDemo: () => void;
}

export default function Navbar({
  onRequestDemo,
}: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container">
        <div className="glass mt-5 flex h-20 items-center justify-between rounded-full border border-slate-200/70 px-8 shadow-xl">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-blue-500/30">
              CI
            </div>

            <div className="hidden sm:block">
              <h3 className="text-lg font-bold tracking-tight text-slate-900">
                ComplianceOS
              </h3>

              <p className="text-xs text-slate-500">
                Compliance Intelligence Platform
              </p>
            </div>
          </Link>

          {/* Desktop */}

          <nav className="hidden items-center gap-10 lg:flex">
            {menu.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition duration-200 hover:text-slate-900"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Right */}

          <div className="flex items-center gap-4">

            <button className="hidden text-sm font-medium text-slate-600 transition hover:text-slate-900 md:block">
              Sign In
            </button>

           <button
  type="button"
  onClick={onRequestDemo}
  className="btn-primary"
>
  Request Demo

  <ArrowRight size={18} />
</button>

            <button className="rounded-xl p-2 transition hover:bg-slate-100 lg:hidden">
              <Menu size={22} />
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}