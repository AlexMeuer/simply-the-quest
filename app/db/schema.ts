import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

const timestamps = {
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp()
    .notNull()
    .$onUpdateFn(() => new Date()),
} as const;

export const questsTable = pgTable("quests", {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar({ length: 255 }).notNull(),
  description_md: varchar({ length: 1000 }).notNull().default(""),
  ...timestamps,
});
