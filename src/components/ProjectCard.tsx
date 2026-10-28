import Link from "next/link";
import { Project } from "@/types";
import { getThumbnail } from "@/lib/thumbnail";

export default function ProjectCard({ project }: { project: Project }) {
  const thumbnail = getThumbnail(project);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="pixel-panel group flex flex-col p-5 transition-transform duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_var(--color-shadow)]"
    >
      <h3 className="font-heading text-sm leading-relaxed tracking-tight">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted">{project.summary}</p>
      {thumbnail && (
        <img
          src={thumbnail}
          alt={project.title}
          className="pixel-border mt-4 aspect-video w-full object-cover"
        />
      )}
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="pixel-chip text-muted">
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  );
}
