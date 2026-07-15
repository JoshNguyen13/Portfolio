import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "realtime-dashboard",
    title: "Realtime Analytics Dashboard",
    summary: "A live metrics dashboard for tracking product usage across web and mobile.",
    description:
      "Built a realtime analytics dashboard that ingests event streams and renders live charts for product and growth teams. Focused on sub-second latency from event to chart update, using websockets for streaming and a denormalized read model for fast queries. Supports custom date ranges, saved views, and CSV export.",
    tags: ["Next.js", "TypeScript", "WebSockets", "PostgreSQL"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/realtime-dashboard",
    featured: true,
  },
  {
    slug: "recipe-planner",
    title: "Recipe & Meal Planner",
    summary: "A weekly meal planning app with automatic grocery list generation.",
    description:
      "A meal planning app that lets users build weekly menus from a recipe library and automatically generates a consolidated grocery list, grouped by store aisle. Includes drag-and-drop scheduling, serving-size scaling, and offline support via a local-first data layer.",
    tags: ["React", "IndexedDB", "Tailwind CSS"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/recipe-planner",
    featured: true,
  },
  {
    slug: "task-queue",
    title: "Distributed Task Queue",
    summary: "A lightweight, horizontally scalable background job processor.",
    description:
      "A background job processing system designed for horizontal scalability, with at-least-once delivery, configurable retries with exponential backoff, and dead-letter queues for failed jobs. Includes a web UI for inspecting queue depth, job history, and worker health.",
    tags: ["Node.js", "Redis", "Docker"],
    repoUrl: "https://github.com/example/task-queue",
    featured: true,
  },
  {
    slug: "budget-tracker",
    title: "Personal Budget Tracker",
    summary: "A privacy-first budgeting app that keeps all data on-device.",
    description:
      "A budgeting app built around the idea that financial data should never leave your device. All transaction data is stored and processed locally, with optional encrypted export/import for backups. Includes category breakdowns, recurring transaction detection, and monthly trend charts.",
    tags: ["React Native", "SQLite"],
    repoUrl: "https://github.com/example/budget-tracker",
  },
  {
    slug: "devtools-extension",
    title: "API Inspector DevTools Extension",
    summary: "A browser extension for inspecting and replaying API requests.",
    description:
      "A browser DevTools extension that captures outgoing API requests, lets developers inspect headers and payloads, and replay requests with modified parameters directly from the panel. Built to speed up debugging integrations without needing a separate proxy tool.",
    tags: ["TypeScript", "Chrome Extensions API"],
    repoUrl: "https://github.com/example/devtools-extension",
  },
];
