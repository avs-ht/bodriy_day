import z from "zod";

export const workSchema = z.object({
  city: z.string().min(1, {
    message: "Укажите ваш город",
  }),
  job: z.string(),
  name: z.string().min(1, {
    message: "Укажите ваше имя",
  }),
  phone: z.string(),
});

export type WorkRequest = z.infer<typeof workSchema>;
