import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="border-b-[3px] border-ink py-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Work"
          title="Projects"
          description="A selection of things I've built, from side projects to production systems."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
