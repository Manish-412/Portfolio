"use client";

import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { certifications } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Certifications() {
  return (
    <Section id="certifications" className="section-anchor px-6 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SectionHeading
          eyebrow="Achievements"
          title="Hackathons and honors"
          description="Finalist placements and competitive research milestones."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert) => (
            <Card key={cert.title}>
              <CardHeader>
                <CardTitle>{cert.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="mt-2 text-xs text-muted-foreground">{cert.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
