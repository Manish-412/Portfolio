"use client";

import Image from "next/image";

import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function GithubStats() {
  return (
    <Section id="github" className="section-anchor px-6 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SectionHeading
          eyebrow="GitHub"
          title="Open-source momentum"
          description="Snapshots of recent contributions and language distribution."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Contribution Graph</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="https://ghchart.rshah.org/409ba5/your-github"
                alt="GitHub contribution graph"
                width={900}
                height={200}
                className="w-full rounded-2xl"
              />
            </CardContent>
          </Card>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>GitHub Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://github-readme-stats.vercel.app/api?username=your-github&show_icons=true&theme=transparent"
                  alt="GitHub stats"
                  width={500}
                  height={200}
                  className="w-full rounded-2xl"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=your-github&layout=compact&theme=transparent"
                  alt="Top languages"
                  width={500}
                  height={200}
                  className="w-full rounded-2xl"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
