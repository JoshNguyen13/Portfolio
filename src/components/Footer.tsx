import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>
        <div className="flex gap-5">
          {profile.links.github && (
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
              GitHub
            </a>
          )}
          {profile.links.linkedin && (
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
              LinkedIn
            </a>
          )}
          {profile.links.twitter && (
            <a href={profile.links.twitter} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
              Twitter
            </a>
          )}
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
