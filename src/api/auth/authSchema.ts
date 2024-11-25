import { z } from "zod";

export const AuthSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(25, "Username must not exceed 25 characters"),
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password must not exceed 32 characters"),
});

export const LoginSchema = z.object({
  usernameOrEmail: z.string().min(3, "UsernameOrEmail must be at least 3 characters"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password must not exceed 32 characters"),
});

export const RefreshTokenSchema = z.object({
  token: z.string(),
});
