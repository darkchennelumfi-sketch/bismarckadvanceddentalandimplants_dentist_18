import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "Please enter your first name.")
    .max(80, "Please use 80 characters or fewer."),
  lastName: z
    .string()
    .trim()
    .min(2, "Please enter your last name.")
    .max(80, "Please use 80 characters or fewer."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(160, "Please use 160 characters or fewer."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number.")
    .max(30, "Please use 30 characters or fewer.")
    .regex(/^[0-9()+.\-\s]+$/, "Please enter a valid phone number."),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more.")
    .max(2000, "Please keep your message under 2,000 characters."),
  company: z.string().optional(),
});

export type ContactValues = z.infer<typeof contactSchema>;
