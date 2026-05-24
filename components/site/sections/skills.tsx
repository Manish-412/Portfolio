"use client";

import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills" className="section-anchor px-6 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SectionHeading
          eyebrow="Skills"
          title="Modern web + applied AI toolkit"
          description="Full-stack delivery with hands-on ML, computer vision, and production tooling."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <Card key={group.title} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <group.icon className="h-5 w-5 text-sky-300" />
                  <CardTitle>{group.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 sm:grid-cols-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-muted-foreground transition hover:border-white/20 hover:bg-white/[0.06]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400/70" />
                      <span className="text-foreground/90">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
