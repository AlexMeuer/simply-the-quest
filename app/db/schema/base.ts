import { pgEnum, timestamp, uuid } from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("status", [
  "open",
  "completed",
  "failed",
  "abandoned",
]);

export const idCol = () => uuid("id").primaryKey().defaultRandom();

export const timestamps = {
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at")
    .notNull()
    .$onUpdateFn(() => new Date()),
} as const;
