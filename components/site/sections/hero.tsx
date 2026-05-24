"use client";

import Image from "next/image";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  GitBranchIcon,
  LinkIcon,
  MailIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedTyping } from "@/components/site/animated-typing";
import { heroRoles, siteConfig, stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="section-anchor relative overflow-hidden px-6 pb-20 pt-24 sm:pt-32">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Badge className="bg-sky-500/10 text-sky-200">
            Hackathon finalist · Research in BraTS
          </Badge>
          <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            {siteConfig.name}
            <span className="block text-2xl font-normal text-muted-foreground sm:text-3xl">
              <AnimatedTyping words={heroRoles} />
            </span>
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            {siteConfig.bio}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="h-11 px-5" asChild>
              <a href="#projects">
                View Projects <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" className="h-11 px-5" asChild>
              <a href={siteConfig.resumeUrl} download>
                Download Resume <DownloadIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <a className="inline-flex items-center gap-2 hover:text-foreground" href="https://github.com/Manish-412">
              <GitBranchIcon className="h-4 w-4" />
              GitHub
            </a>
            <a className="inline-flex items-center gap-2 hover:text-foreground" href="https://www.linkedin.com/in/manish-shah098">
              <LinkIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a className="inline-flex items-center gap-2 hover:text-foreground" href="mailto:sahmanish0856@gmail.com">
              <MailIcon className="h-4 w-4" />
              Email
            </a>
          </div>
          <div className="grid gap-4 pt-6 sm:grid-cols-2">
            {stats.map((item) => (
              <div
                key={item.label}
                className="gradient-border rounded-2xl border border-white/5 bg-white/5 p-4"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="h-4 w-4 text-sky-300" />
                  <div>
                    <p className="text-xl font-semibold text-foreground">
                      {item.value}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-sky-500/20 via-blue-600/10 to-transparent blur-3xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6">
            <Image
              src="/images/profile_photo.jpeg"
              alt="Profile photo"
              width={480}
              height={520}
              className="w-full rounded-3xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
