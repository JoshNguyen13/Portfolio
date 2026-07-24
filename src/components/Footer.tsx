import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-[3px] border-ink">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>
        <div className="flex gap-2">
          {profile.links.github && (
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm px-2 py-1 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              GitHub
            </a>
          )}
          {profile.links.linkedin && (
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm px-2 py-1 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              LinkedIn
            </a>
          )}
          {profile.links.twitter && (
            <a
              href={profile.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm px-2 py-1 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Twitter
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            className="rounded-sm px-2 py-1 transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
