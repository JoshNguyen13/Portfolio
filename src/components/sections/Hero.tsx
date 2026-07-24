import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="about" className="border-b-[3px] border-ink py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <p className="pixel-chip inline-block bg-accent font-heading text-[0.6rem] tracking-wide text-accent-foreground uppercase">
          {profile.location}
        </p>
        <h1 className="mt-4 font-heading text-2xl leading-relaxed tracking-tight text-accent sm:text-4xl">
          {profile.name}
        </h1>
        {profile.tagline && (
          <p className="mt-4 max-w-2xl text-lg text-muted">{profile.tagline}</p>
        )}
        <p className="mt-6 max-w-2xl leading-relaxed text-muted">{profile.bio}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="pixel-btn bg-accent text-accent-foreground">
            View projects
          </a>
          <a href="#contact" className="pixel-btn bg-secondary text-secondary-foreground">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
