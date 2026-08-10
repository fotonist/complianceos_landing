"use client";

import ExecutiveHeader from "./dashboard-preview/ExecutiveHeader";
import KPIGrid from "./dashboard-preview/KPIGrid";

import RiskHeatmap, {
  type RiskPoint,
} from "./dashboard-preview/RiskHeatmap";

import FrameworkCoverage, {
  type FrameworkCoverageItem,
} from "./dashboard-preview/FrameworkCoverage";

import TopRisks, {
  type TopRisk,
} from "./dashboard-preview/TopRisks";

import ExecutiveTimeline, {
  type TimelineEvent,
} from "./dashboard-preview/ExecutiveTimeline";
import AIRecommendations, {
  type AIRecommendation,
} from "./dashboard-preview/AIRecommendations";
export default function DashboardPreview() {
  const executive = {
    score: 96,
    status: "Excellent",
    lastSync: "2 minutes ago",
    organization: "Compliance Intelligence OS",
    reportingPeriod: "Last 30 Days",
    riskTrend: -18,
    complianceTrend: 8.4,
    aiConfidence: 98,
    frameworks: 12,
    controls: 624,
    evidences: 1842,
  };

  const kpi = {
    criticalRisks: 8,
    openTasks: 23,
    evidences: 1842,
    controls: 624,
    complianceScore: 96,
    aiFindings: 17,
  };

  const heatmap: RiskPoint[] = [
    {
      id: 1,
      x: 5,
      y: 5,
      title: "Ransomware",
      severity: "critical",
    },
    {
      id: 2,
      x: 4,
      y: 5,
      title: "Data Leakage",
      severity: "high",
    },
    {
      id: 3,
      x: 3,
      y: 4,
      title: "Supplier Risk",
      severity: "medium",
    },
    {
      id: 4,
      x: 2,
      y: 3,
      title: "Backup Failure",
      severity: "medium",
    },
    {
      id: 5,
      x: 4,
      y: 2,
      title: "Patch Delay",
      severity: "low",
    },
  ];

  const frameworks: FrameworkCoverageItem[] = [
    {
      id: "iso27001",
      name: "ISO 27001",
      version: "2022",
      score: 97,
      controls: 97,
      implemented: 93,
      evidenceCoverage: 92,
      maturity: 96,
      status: "healthy",
    },
    {
      id: "iso9001",
      name: "ISO 9001",
      version: "2015",
      score: 95,
      controls: 128,
      implemented: 121,
      evidenceCoverage: 89,
      maturity: 94,
      status: "healthy",
    },
    {
      id: "iso22301",
      name: "ISO 22301",
      version: "2019",
      score: 91,
      controls: 58,
      implemented: 52,
      evidenceCoverage: 84,
      maturity: 90,
      status: "attention",
    },
  ];

const topRisks: TopRisk[] = [
  {
    id: "1",
    title: "Ransomware Attack",
    framework: "ISO 27001",
    owner: "IT Security",
    score: 97,
    trend: "up",
    aiPriority: 99,
    dueDate: "12 Aug",
  },
  {
    id: "2",
    title: "Supplier Assessment",
    framework: "ISO 9001",
    owner: "Procurement",
    score: 83,
    trend: "down",
    aiPriority: 91,
    dueDate: "18 Aug",
  },
  {
    id: "3",
    title: "Business Continuity",
    framework: "ISO 22301",
    owner: "Operations",
    score: 74,
    trend: "down",
    aiPriority: 86,
    dueDate: "30 Aug",
  },
];

  const timeline: TimelineEvent[] = [
  {
    id: "1",
    title: "Management Review",
    description:
      "Executive management review meeting completed successfully.",
    owner: "Executive Board",
    date: "Yesterday",
    status: "completed",
    framework: "ISO 9001",
  },
  {
    id: "2",
    title: "Internal Audit",
    description:
      "Internal audit activities are currently in progress.",
    owner: "Audit Team",
    date: "Today",
    status: "active",
    framework: "ISO 27001",
  },
  {
    id: "3",
    title: "Evidence Collection",
    description:
      "Evidence collection scheduled for next assessment cycle.",
    owner: "Compliance",
    date: "Tomorrow",
    status: "planned",
    framework: "ISO 22301",
  },
];

  const recommendations: AIRecommendation[] = [
  {
    id: "1",
    title: "Complete MFA rollout",
    description:
      "Roll out multi-factor authentication across all privileged accounts to reduce enterprise attack surface.",
    priority: "critical",
    impact: 97,
    confidence: 99,
    category: "Identity Security",
    estimatedDays: 3,
  },
  {
    id: "2",
    title: "Close supplier compliance gaps",
    description:
      "Resolve outstanding supplier assessment findings before the next audit cycle.",
    priority: "high",
    impact: 88,
    confidence: 95,
    category: "Third Party Risk",
    estimatedDays: 5,
  },
  {
    id: "3",
    title: "Refresh evidence repository",
    description:
      "Replace expired evidence and complete missing documentation for critical controls.",
    priority: "medium",
    impact: 74,
    confidence: 93,
    category: "Evidence Management",
    estimatedDays: 7,
  },
];

  return (
    <section className="relative w-full">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[140px]" />
        <div className="absolute right-0 top-60 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[140px]" />
      </div>

      <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-10">
        <ExecutiveHeader
          score={executive.score}
          status={executive.status}
          lastSync={executive.lastSync}
          organization={executive.organization}
          reportingPeriod={executive.reportingPeriod}
          riskTrend={executive.riskTrend}
          complianceTrend={executive.complianceTrend}
          aiConfidence={executive.aiConfidence}
          frameworks={executive.frameworks}
          controls={executive.controls}
          evidences={executive.evidences}
        />

        <KPIGrid
          criticalRisks={kpi.criticalRisks}
          openTasks={kpi.openTasks}
          evidences={kpi.evidences}
          controls={kpi.controls}
          complianceScore={kpi.complianceScore}
          aiFindings={kpi.aiFindings}
        />

        <div className="grid gap-10 xl:grid-cols-[1.15fr_0.85fr]">
          <RiskHeatmap risks={heatmap} />

          <FrameworkCoverage frameworks={frameworks} />
        </div>

        <TopRisks risks={topRisks} />

        <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr]">
          <ExecutiveTimeline events={timeline} />

          <AIRecommendations recommendations={recommendations} />
        </div>
      </div>
    </section>
  );
}