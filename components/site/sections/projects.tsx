"use client";

import Image from "next/image";
import { ExternalLinkIcon, GitBranchIcon } from "lucide-react";

import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectCategories, projects } from "@/lib/data";

export function Projects() {
  return (
    <Section id="projects" className="section-anchor px-6 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SectionHeading
          eyebrow="Projects"
          title="Flagship builds with measurable impact"
          description="Each project balances research depth, engineering execution, and user outcomes."
        />
        <Tabs defaultValue="All">
          <TabsList>
            {projectCategories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {projectCategories.map((category) => {
            const filtered =
              category === "All"
                ? projects
                : projects.filter((project) => project.category === category);
            return (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="grid gap-6 lg:grid-cols-2">
                  {filtered.map((project) => (
                    <Dialog key={project.title}>
                      <Card className="overflow-hidden">
                        <CardHeader>
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={960}
                            height={540}
                            className="h-48 w-full rounded-2xl object-cover"
                          />
                          <CardTitle className="mt-4">{project.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.stack.map((item) => (
                              <Badge key={item}>{item}</Badge>
                            ))}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            Impact
                          </p>
                          <p className="text-sm text-foreground">{project.metrics}</p>
                          <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-muted-foreground">
                            {project.highlights.map((highlight) => (
                              <li key={highlight}>{highlight}</li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter className="justify-between">
                          <div className="flex gap-2">
                            <Button size="sm" asChild>
                              <a href={project.links.github}>
                                <GitBranchIcon className="mr-2 h-4 w-4" /> GitHub
                              </a>
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                              <a href={project.links.live}>
                                Live <ExternalLinkIcon className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                          <DialogTrigger className="text-xs text-muted-foreground hover:text-foreground">
                            View Case Study
                          </DialogTrigger>
                        </CardFooter>
                      </Card>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{project.title}</DialogTitle>
                          <DialogDescription>{project.category}</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 text-sm text-muted-foreground">
                          <p>{project.caseStudy}</p>
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                              Challenges solved
                            </p>
                            <ul className="mt-2 list-disc space-y-1 pl-5">
                              {project.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button asChild>
                            <a href={project.links.github}>View Repository</a>
                          </Button>
                          <DialogClose className="text-sm text-muted-foreground hover:text-foreground">
                            Close
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </Section>
  );
}
