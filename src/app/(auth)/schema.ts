import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email address is required" })
    .email("Please enter a valid email address"),
  password: z.string().min(1, { message: "Password is required" }),
});

export const signUpFormSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email address is required" })
      .email("Please enter a valid email address"),
    profile_name: z.string().min(1, { message: "Profile name is required" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    password_confirmation: z
      .string()
      .min(1, { message: "Password confirmation is required" }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"], // Attach error to password_confirmation field
  });
