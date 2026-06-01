"use client";

import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

export function Resume() {
  return (
    <Section id="resume" className="section-anchor px-6 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SectionHeading
          eyebrow="Resume"
          title="Full-stack + applied AI snapshot"
          description="Highlights from research, projects, and applied engineering delivery."
        />
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Resume Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-foreground">AI + CV</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Brain tumor classification, segmentation, and model evaluation.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-foreground">Full Stack</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Next.js, Node.js, dashboards, and production-grade workflows.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-foreground">Research</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Manuscripts in preparation for BraTS-based medical imaging.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href={siteConfig.resumeUrl} download>
                Download Resume
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Section>
  );
}
