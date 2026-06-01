"use client";

import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" className="section-anchor px-6 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SectionHeading
          eyebrow="Experience"
          title="Research and achievements timeline"
          description="Research milestones, hackathon results, and applied engineering impact."
        />
        <div className="relative grid gap-6 pl-6">
          <div className="absolute left-1 top-0 h-full w-px bg-white/10" />
          {experiences.map((item) => (
            <div key={item.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-5">
              <span className="absolute -left-[9px] top-6 h-4 w-4 rounded-full border border-white/20 bg-sky-400/80" />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <span className="text-xs text-muted-foreground">{item.timeframe}</span>
              </div>
              <p className="mt-1 text-sm text-sky-200">{item.company}</p>
              <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
