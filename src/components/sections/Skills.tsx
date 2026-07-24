import { skills } from "@/data/skills";
import SectionHeading from "@/components/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="border-b-[3px] border-ink py-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Toolbox" title="Skills" />
        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-medium tracking-wide text-muted uppercase">
                {group.category}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="pixel-chip text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
