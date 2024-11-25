import type { IUser } from "@/api/user/userSchema";
import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      user?: IUser; // You can replace 'any' with a more specific type if available
    }
  }
}
