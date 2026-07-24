type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="pixel-chip mb-3 inline-block bg-accent font-heading text-[0.6rem] tracking-wide text-accent-foreground uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-xl leading-relaxed tracking-tight sm:text-2xl">{title}</h2>
      {description && <p className="mt-3 text-muted">{description}</p>}
    </div>
  );
}
