import Link from "next/link";
import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-xl border border-border p-6 transition-colors hover:border-accent"
    >
      <h3 className="font-semibold tracking-tight group-hover:text-accent">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted">{project.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  );
}
