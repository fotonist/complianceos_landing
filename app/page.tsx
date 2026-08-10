cat > app/page.tsx <<'EOF'
"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DashboardPreview from "@/components/DashboardPreview";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        <Hero
          description="Connect governance, risk, compliance, audit and evidence in one intelligent operating model."
          subDescription="Transform compliance data into actionable intelligence for your organization."
          supportedFrameworks="Supported frameworks"
        />

        <DashboardPreview />
      </main>
    </>
  );
}
EOF
