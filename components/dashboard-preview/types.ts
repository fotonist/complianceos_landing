export type HealthStatus =
  | "healthy"
  | "attention"
  | "critical";

export type RiskLevel =
  | "low"
  | "medium"
  | "high"
  | "critical";

export type TrendDirection =
  | "up"
  | "down"
  | "stable";

export interface ExecutiveHeaderData {
  score: number;
  status: string;
  lastSync: string;
  organization: string;
  reportingPeriod: string;
  riskTrend: number;
  complianceTrend: number;
  aiConfidence: number;
  frameworks: number;
  controls: number;
  evidences: number;
}

export interface KPIData {
  criticalRisks: number;
  openTasks: number;
  evidences: number;
  controls: number;
  complianceScore: number;
  aiFindings: number;
}

export interface RiskPoint {
  id: string;
  title: string;
  likelihood: number;
  impact: number;
  level: RiskLevel;
}

export interface FrameworkCoverageItem {
  id: string;
  name: string;
  version?: string;
  score: number;
  controls: number;
  implemented: number;
  evidenceCoverage: number;
  maturity: number;
  status: HealthStatus;
}

export interface TopRisk {
  id: string;
  title: string;
  framework: string;
  owner: string;
  score: number;
  trend: TrendDirection;
  aiPriority: number;
  dueDate: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  owner: string;
  date: string;
  status:
    | "completed"
    | "active"
    | "planned"
    | "risk";
  framework?: string;
}

export interface AIRecommendation {
  id: string;
  title: string;
  description: string;
  priority:
    | "critical"
    | "high"
    | "medium"
    | "low";
  impact: number;
  confidence: number;
  category: string;
  estimatedDays: number;
}

export interface DashboardPreviewProps {
  executive: ExecutiveHeaderData;
  kpi: KPIData;
  heatmap: RiskPoint[];
  frameworks: FrameworkCoverageItem[];
  topRisks: TopRisk[];
  timeline: TimelineEvent[];
  recommendations: AIRecommendation[];
}