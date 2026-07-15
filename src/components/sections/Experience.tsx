import { experience } from "@/data/experience";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border py-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Career" title="Experience" />
        <Timeline entries={experience} />
      </div>
    </section>
  );
}
