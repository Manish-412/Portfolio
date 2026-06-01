import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl space-y-3", className)}>
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="text-base text-muted-foreground">{description}</p>
    </div>
  );
}
