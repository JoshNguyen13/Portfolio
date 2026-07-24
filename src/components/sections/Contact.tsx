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
        <div className="flex flex-wrap gap-4">
          <a href={`mailto:${profile.email}`} className="pixel-btn bg-accent text-accent-foreground">
            {profile.email}
          </a>
          {profile.links.github && (
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn bg-secondary text-secondary-foreground"
            >
              GitHub
            </a>
          )}
          {profile.links.linkedin && (
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn bg-secondary text-secondary-foreground"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
