// =============================================================================
// Resume Type Definitions
// =============================================================================
// resume.yaml 구조를 기준으로 관리되는 타입입니다.
// =============================================================================

// ── Basics ──────────────────────────────────────────────────────────────────

export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface Basics {
  name: string;
  nameKo: string;
  label: string;
  email: string;
  url: string;
  canonical: string;
  summary: string;
  profiles: Profile[];
}

// ── Positioning ─────────────────────────────────────────────────────────────

export interface Positioning {
  headline: string;
  targetRoles: string[];
}

// ── Skills ──────────────────────────────────────────────────────────────────

export interface Skills {
  frontend: string[];
  testing: string[];
  tooling: string[];
  design?: string[];
  collaboration?: string[];
}

// ── Key Contributions (공용) ────────────────────────────────────────────────

/** 검토했다가 포기한 선택지 */
export interface ContributionAlternative {
  option: string;
  whyNot: string;
}

export interface ContributionDetail {
  content: string;
  example?: string;
}

export type ContributionContent = string | ContributionDetail;

export interface ContributionItem {
  problem: ContributionContent;
  decision: ContributionContent;
  result?: ContributionContent;
  alternatives?: ContributionAlternative[];
}

interface ContributionBase {
  title?: string;
}

export interface SimpleKeyContribution extends ContributionBase {
  problem: ContributionContent;
  decision: ContributionContent;
  result?: ContributionContent;
  alternatives?: ContributionAlternative[];
}

export interface DetailedKeyContribution extends ContributionBase {
  items: ContributionItem[];
}

export type KeyContribution = SimpleKeyContribution | DetailedKeyContribution;

/** 카드 상단에 스캔용으로 노출하는 수치. 첫 항목은 적용 범위 */
export interface ProjectMetric {
  label: string;
  value: string;
}

// ── Work Experience (회사 경력) ─────────────────────────────────────────────

export interface WorkProject {
  id: string;
  name: string;
  period: string;
  role: string;
  featured: boolean;
  techStack: string[];
  oneLiner: string;
  metrics?: ProjectMetric[];
  keyContributions?: KeyContribution[];
}

export interface WorkExperience {
  company: string;
  location: string;
  department: string;
  position: string;
  startDate: string;
  endDate: string;
  projects: WorkProject[];
}

// ── Open Source ─────────────────────────────────────────────────────────────

export type ProjectStatus = "awarded" | "completed" | "in-progress";

export interface OpenSourceProject {
  id: string;
  name: string;
  teamSize: number;
  role: string;
  status: ProjectStatus;
  repoUrl?: string;
  techStack: string[];
  oneLiner: string;
  metrics?: ProjectMetric[];
  keyContributions: KeyContribution[];
}

// ── Deep Dives (경험과 고민) ────────────────────────────────────────────────

export interface ExecutionStep {
  title: string;
  details: string[];
}

// ── Education & Training ────────────────────────────────────────────────────

export interface Education {
  institution: string;
  location: string;
  area: string;
  startDate: string;
  endDate: string;
}

export interface Training {
  institution: string;
  location: string;
  course: string;
  startDate: string;
  endDate: string;
}

// ── Common ──────────────────────────────────────────────────────────────────

export interface Meta {
  version: string;
  lastModified: string;
}

export interface Certification {
  name: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Writing {
  title: string;
  url: string;
  note?: string;
}

// ── Root ────────────────────────────────────────────────────────────────────

export interface ResumeData {
  basics: Basics;
  positioning: Positioning;
  skills: Skills;
  work: WorkExperience[];
  openSource: OpenSourceProject[];
  education: Education[];
  training: Training[];
  certifications: Certification[];
  languages: Language[];
  writing?: Writing[];
  meta: Meta;
}

// ── Interview Stories ───────────────────────────────────────────────────────

export interface AlternativeConsidered {
  approach: string;
  whyNotViable: string;
}

export interface TechnicalStep {
  title: string;
  insight: string;
  code?: string;
  layerBehavior?: Record<string, string>;
}

export interface TechnicalDeepDive {
  title: string;
  summary: string;
  steps: TechnicalStep[];
}

export interface InterviewQuestion {
  q: string;
  conclusion: string;
  reason?: string;
  example?: string;
  retrospective?: string;
}

// ── Branch‑style questions (tree structure) ─────────────────────────────────

export interface BranchQuestion {
  id: string;
  q: string;
  answer: string;
  followUps?: BranchQuestion[];
}

export interface QuestionBranch {
  id: string;
  trigger: string;
  questions: BranchQuestion[];
}

export interface EntryQuestion {
  q: string;
  answer: string;
}

export interface InterviewStory {
  id: string;
  tags: string[];
  relatedProject: string;
  title: string;
  /** Flat Q&A list (legacy / simple stories) */
  questions: InterviewQuestion[];
  /** Tree-structured entry point + branches (new format) */
  entryQuestion?: EntryQuestion;
  branches?: QuestionBranch[];
  ownership: string[];
  technicalDeepDives?: TechnicalDeepDive[];
  alternativesConsidered?: AlternativeConsidered[];
}

export interface InterviewStoriesData {
  stories: InterviewStory[];
}
