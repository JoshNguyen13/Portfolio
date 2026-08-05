import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/#projects" className="text-sm text-muted transition-colors hover:text-foreground">
        ← Back to projects
      </Link>

      <h1 className="mt-6 font-heading text-xl leading-relaxed tracking-tight sm:text-2xl">
        {project.title}
      </h1>
      <p className="mt-3 text-lg text-muted">{project.summary}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="pixel-chip text-muted">
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn bg-accent text-accent-foreground"
          >
            View live
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn bg-secondary text-secondary-foreground"
          >
            View source
          </a>
        )}
      </div>

      {project.videoEmbedUrl && (
        <div className="pixel-border mt-10 aspect-video w-full overflow-hidden">
          <iframe
            src={project.videoEmbedUrl}
            title={`${project.title} demo video`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}

      <p className="mt-10 leading-relaxed text-muted">{project.description}</p>
    </article>
  );
}
