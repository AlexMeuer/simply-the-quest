import { pgTable, text } from "drizzle-orm/pg-core";
import { idCol, timestamps } from "./base";

export const campaign = pgTable("campaign", {
  id: idCol(),
  name: text("name").notNull(),
  // worldId: uuid("world_id").notNull(),
  ...timestamps,
});
