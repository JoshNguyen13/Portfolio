import { profile } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's work together"
          description="I'm always open to discussing new projects, opportunities, or just talking shop."
        />
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            {profile.email}
          </a>
          {profile.links.github && (
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent"
            >
              GitHub
            </a>
          )}
          {profile.links.linkedin && (
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
