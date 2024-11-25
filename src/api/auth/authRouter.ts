import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { validateRequest } from "@/common/utils/httpHandlers";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";
import { z } from "zod";
import { authController } from "./authController";
import { AuthLoginSchema, AuthRegisterSchema, RefreshTokenBodySchema } from "./authModel";
import { AuthSchema, LoginSchema, LogoutSchema, RefreshTokenSchema } from "./authSchema";

export const authRegistry = new OpenAPIRegistry();
export const authRouter: Router = express.Router();

// Register Auth Schema
authRegistry.register("Auth", AuthSchema);

// Register user
authRegistry.registerPath({
  method: "post",
  path: "/auth/register",
  tags: ["Auth"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: AuthSchema,
        },
      },
    },
  },
  responses: createApiResponse(AuthSchema, "Successfully registered user"),
});
authRouter.post("/register", validateRequest(AuthRegisterSchema), authController.register);

// Login user
authRegistry.registerPath({
  method: "post",
  path: "/auth/login",
  tags: ["Auth"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: LoginSchema,
        },
      },
    },
  },
  responses: createApiResponse(LoginSchema, "Successfully logged in"),
});
authRouter.post("/login", validateRequest(AuthLoginSchema), authController.login);

// // Forget password
// authRegistry.registerPath({
//   method: "post",
//   path: "/auth/forget-password",
//   tags: ["Auth"],
//   request: {
//     body: {
//       content: {
//         "application/json": {
//           schema: AuthSchema,
//         },
//       },
//     },
//   },
//   responses: createApiResponse(AuthSchema, "Password reset link sent"),
// });
// authRouter.post("/forget-password", validateRequest(AuthSchema), authController.forgetPassword);

// Refresh token
authRegistry.registerPath({
  method: "post",
  path: "/auth/refresh-token",
  tags: ["Auth"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: RefreshTokenSchema,
        },
      },
    },
  },
  responses: createApiResponse(RefreshTokenSchema, "Token refreshed"),
});
authRouter.post("/refresh-token", validateRequest(RefreshTokenBodySchema), authController.refreshToken);

// Logout user
authRegistry.registerPath({
  method: "post",
  path: "/auth/logout",
  tags: ["Auth"],
  responses: createApiResponse(LogoutSchema, "Successfully logged out"),
});
authRouter.post("/logout", validateRequest(LogoutSchema), authController.logout);
