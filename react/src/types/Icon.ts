import { z } from "zod";

export const Icon = z.object({
  id: z.number().optional(),
  name: z.string().min(1),
  type: z.string().optional(),
  url: z.string().url(),
});
export type Icon = z.infer<typeof Icon>;
