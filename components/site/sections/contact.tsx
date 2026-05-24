"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { contactSchema, type ContactValues } from "@/lib/validations";

export function Contact() {
  const { push } = useToast();
  const [loading, setLoading] = useState(false);
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      company: "",
      honey: "",
    },
  });

  const onSubmit = async (values: ContactValues) => {
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error ?? "Failed to send message");
      }

      form.reset();
      push({
        title: "Message sent",
        description: "Thanks for reaching out. I will reply within 24 hours.",
        variant: "success",
      });
    } catch (error) {
      push({
        title: "Something went wrong",
        description:
          error instanceof Error
            ? error.message
            : "Please try again or email me directly.",
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const errors = form.formState.errors;

  return (
    <Section id="contact" className="section-anchor px-6 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SectionHeading
          eyebrow="Contact"
          title="Let us build something exceptional"
          description="Share your goals, and I will respond with a focused plan and timeline."
        />
        <Card>
          <CardHeader>
            <CardTitle>Start a conversation</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              className="grid gap-4 md:grid-cols-2"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="space-y-2">
                <label className="text-xs text-muted-foreground">Name</label>
                <Input
                  {...form.register("name")}
                  aria-invalid={Boolean(errors.name)}
                  placeholder="Your name"
                />
                {errors.name?.message ? (
                  <p className="text-xs text-rose-300">{errors.name.message}</p>
                ) : null}
              </div>
              <div className="space-y-2">
                <label className="text-xs text-muted-foreground">Email</label>
                <Input
                  {...form.register("email")}
                  aria-invalid={Boolean(errors.email)}
                  placeholder="you@email.com"
                />
                {errors.email?.message ? (
                  <p className="text-xs text-rose-300">{errors.email.message}</p>
                ) : null}
              </div>
              <div className="space-y-2">
                <label className="text-xs text-muted-foreground">Company</label>
                <Input {...form.register("company")} placeholder="Company" />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-muted-foreground">Subject</label>
                <Input
                  {...form.register("subject")}
                  aria-invalid={Boolean(errors.subject)}
                  placeholder="Project inquiry"
                />
                {errors.subject?.message ? (
                  <p className="text-xs text-rose-300">
                    {errors.subject.message}
                  </p>
                ) : null}
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs text-muted-foreground">Message</label>
                <Textarea
                  {...form.register("message")}
                  aria-invalid={Boolean(errors.message)}
                  placeholder="Tell me about your goals, timeline, and scope."
                />
                {errors.message?.message ? (
                  <p className="text-xs text-rose-300">
                    {errors.message.message}
                  </p>
                ) : null}
              </div>
              <input type="text" className="hidden" {...form.register("honey")} />
              <div className="md:col-span-2 flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  Response time: within 24 hours.
                </p>
                <Button type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
