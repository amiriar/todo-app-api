import { commonValidations } from "@/common/utils/commonValidation";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import type { AuthSchema } from "./authSchema";

extendZodWithOpenApi(z);

export type Auth = z.infer<typeof AuthSchema>;
export const TodoSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
});

// Input Validation for 'POST /auth' endpoint
export const AuthRegisterSchema = z.object({
  body: z.object({
    username: commonValidations.username,
    email: commonValidations.email,
    password: commonValidations.password,
  }),
});
export const AuthLoginSchema = z.object({
  body: z.object({
    usernameOrEmail: commonValidations.usernameOrEmail,
    password: commonValidations.password,
  }),
});
export const RefreshTokenBodySchema = z.object({
  body: z.object({
    token: z.string(),
  }),
});
