import { ExperienceEntry } from "@/types";

export const experience: ExperienceEntry[] = [
  {
    role: "Senior Software Engineer",
    org: "Northwind Labs",
    start: "2023",
    end: "Present",
    description:
      "Lead engineer on the platform team, responsible for the core API and internal developer tooling used by 15+ product engineers.",
    highlights: [
      "Redesigned the service's data layer, cutting p95 API latency by 40%",
      "Built an internal CLI that reduced local environment setup time from 45 minutes to under 5",
      "Mentored three junior engineers through onboarding and their first major feature launches",
    ],
  },
  {
    role: "Software Engineer",
    org: "Bright Path Technologies",
    start: "2021",
    end: "2023",
    description:
      "Full-stack engineer on a small team building customer-facing dashboards and the underlying reporting infrastructure.",
    highlights: [
      "Shipped a self-serve reporting feature adopted by 80% of active customers within two quarters",
      "Migrated the frontend from a legacy Angular app to React, improving build times by 3x",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Cedarwood Systems",
    start: "2020",
    end: "2020",
    description:
      "Worked on the mobile team building features for the company's flagship iOS and Android app.",
  },
];
