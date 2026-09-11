import type { ContributionContent, ResumeData } from "../types.js";

function contributionContentToText(content: ContributionContent): string {
  if (typeof content === "string") return content;

  return `${content.content}${content.example ? ` 예: ${content.example}` : ""}`;
}

function contributionToText(contribution: ResumeData["openSource"][number]["keyContributions"][number]): string {
  const items = "items" in contribution ? contribution.items : [contribution];
  return items
    .map((item) =>
      [item.problem, item.decision, item.result]
        .filter((content): content is ContributionContent => content !== undefined)
        .map(contributionContentToText)
        .join(" → "),
    )
    .join(" | ");
}

/**
 * ResumeData → JSON Resume 표준에 가깝게 변환합니다.
 * 표준에 없는 필드(deepDives, training 등)는 커스텀 키로 포함합니다.
 * https://jsonresume.org/schema
 */
export function toJsonResume(data: ResumeData): Record<string, unknown> {
  return {
    $schema: "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
    basics: {
      name: data.basics.name,
      label: data.basics.label,
      email: data.basics.email,
      url: data.basics.url,
      summary: data.basics.summary,
      profiles: data.basics.profiles.map((p) => ({
        network: p.network,
        username: p.username,
        url: p.url,
      })),
    },
    work: data.work.map((job) => ({
      name: job.company,
      location: job.location,
      position: job.position,
      startDate: job.startDate,
      endDate: job.endDate || undefined,
      highlights: job.projects.map((p) => p.oneLiner),
    })),
    education: data.education.map((edu) => ({
      institution: edu.institution,
      area: edu.area,
      startDate: edu.startDate,
      endDate: edu.endDate || undefined,
    })),
    skills: [
      { name: "Frontend", keywords: data.skills.frontend },
      { name: "Testing", keywords: data.skills.testing },
      { name: "Tooling", keywords: data.skills.tooling },
    ],
    // 표준 외 확장 필드
    training: data.training.map((t) => ({
      institution: t.institution,
      course: t.course,
      startDate: t.startDate,
      endDate: t.endDate || undefined,
    })),
    projects: data.openSource.map((p) => ({
      name: p.name,
      description: p.oneLiner,
      highlights: p.keyContributions.map(contributionToText),
      teamSize: p.teamSize,
      status: p.status,
      role: p.role,
      keywords: p.techStack,
      url: p.repoUrl || undefined,
    })),
    certificates: data.certifications.map((c) => ({ name: c.name })),
    languages: data.languages.map((l) => ({ language: l.name, fluency: l.level })),
    writing: data.writing?.map((w) => ({ title: w.title, url: w.url, note: w.note || undefined })),

    meta: {
      canonical: data.basics.canonical,
      version: data.meta.version,
      lastModified: data.meta.lastModified,
    },
  };
}
