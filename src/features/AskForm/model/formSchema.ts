import z from "zod";

export const askSchema = z.object({
  name: z.string().min(1, {
    message: "Укажите ваше имя",
  }),
  phone: z.string().refine(
    (value) => {
      return /^7\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(value);
    },
    { message: "Укажите номер телефона в формате 7(000)000-00-00" }
  ),
});

export type askRequest = z.infer<typeof askSchema>;
