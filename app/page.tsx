"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DashboardPreview from "@/components/DashboardPreview";

export default function HomePage() {
  return (
    <>
      <Navbar />

     <main className="overflow-hidden">
        <Hero />

        <DashboardPreview />
      </main>
    </>
  );
}