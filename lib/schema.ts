import * as z from "zod";

export const formSchema = z
  .object({
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(1),
    password: z.string().min(1),
    passwordConfirm: z.string().min(1),
  })
  .refine((data) => {
    if (data.password !== data.passwordConfirm) {
      return false;
    }
    return true;
  });
