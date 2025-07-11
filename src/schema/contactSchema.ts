import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.email({ message: "Invalid email address" }),
  message: z.string().min(5, "Message is too short"),
});
