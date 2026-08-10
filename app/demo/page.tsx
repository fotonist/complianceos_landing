"use client";

import { useRouter } from "next/navigation";
import DemoModal from "../../components/DemoModal";

export default function DemoPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-slate-50">
      <DemoModal
        open={true}
        onClose={() => router.back()}
      />
    </main>
  );
}