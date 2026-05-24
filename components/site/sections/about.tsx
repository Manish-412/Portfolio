"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { aboutHighlights, siteConfig } from "@/lib/data";

export function About() {
  return (
    <Section id="about" className="section-anchor px-6 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SectionHeading
          eyebrow="About"
          title="Full-stack engineer with an applied AI focus"
          description="Building AI-powered applications across healthcare, agriculture, and enterprise domains with a balance of product polish and research rigor."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {siteConfig.bio} I enjoy shipping production-grade systems under tight
                timelines while maintaining strong data and research foundations.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {aboutHighlights.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Developer Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>Active researcher in medical imaging and brain tumor analysis on BraTS.</li>
                <li>Built AI-first apps for agriculture, healthcare, and enterprise workflows.</li>
                <li>Hackathon finalist with a track record of delivery under pressure.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
