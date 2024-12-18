import { z } from "zod";

export const Role = z.enum(["PLAYER"]);
export type Role = z.infer<typeof Role>;

export const User = z.object({
  username: z.string(),
  role: Role,
  created_at: z.number().transform(Date),
  updated_at: z.number().transform(Date),
});
export type User = z.infer<typeof User>;

export const UserSession = User.pick({
  username: true,
}).extend({
  expires_at: z.number().transform(Date),
});
export type UserSession = z.infer<typeof UserSession>;
