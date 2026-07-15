import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="about" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-sm font-medium tracking-wide text-accent uppercase">
          {profile.location}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{profile.tagline}</p>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted">{profile.bio}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
