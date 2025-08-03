import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { campaign } from "./campaign";

export const CampaignInsert = createInsertSchema(campaign); // for CREATE
export const Campaign = createSelectSchema(campaign); // for READ
