import { z } from "zod";

export const Status = z.enum([
  "success",
  "fail",
  "disabled",
  "expired",
  "active",
  "auto",
]);

export type Status = z.infer<typeof Status>;
