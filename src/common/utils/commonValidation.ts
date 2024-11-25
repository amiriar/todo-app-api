import { z } from "zod";

export const commonValidations = {
  id: z.string().refine((data) => /^[a-fA-F0-9]{24}$/.test(data), "ID must be a valid MongoDB ObjectId"),
  // ... other common validations
};
