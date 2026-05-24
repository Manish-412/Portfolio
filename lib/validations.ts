import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required").max(80),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(2, "Subject is required").max(120),
  message: z.string().min(10, "Message is too short").max(2000),
  company: z.string().max(120).optional().or(z.literal("")),
  honey: z.string().max(0).optional().or(z.literal("")),
});

export type ContactValues = z.infer<typeof contactSchema>;
