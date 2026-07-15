import { ExperienceEntry } from "@/types";

export default function Timeline({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <ol className="space-y-10 border-l border-border pl-6">
      {entries.map((entry) => (
        <li key={`${entry.org}-${entry.role}`} className="relative">
          <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-semibold tracking-tight">
              {entry.role} · {entry.org}
            </h3>
            <span className="text-sm text-muted">
              {entry.start} — {entry.end}
            </span>
          </div>
          <p className="mt-2 text-sm text-muted">{entry.description}</p>
          {entry.highlights && entry.highlights.length > 0 && (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
              {entry.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
