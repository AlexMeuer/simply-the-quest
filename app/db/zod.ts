import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import type { z } from "zod";
import {
  campaign,
  character,
  event,
  image,
  note,
  organisation,
  orgMembership,
  session,
  user,
  world,
} from "./schema";

/* Organisation / Tenancy */
export const Organisation = createSelectSchema(organisation);
export const OrganisationInsert = createInsertSchema(organisation);
export type Organisation = z.infer<typeof Organisation>;
export type OrganisationInsert = z.infer<typeof OrganisationInsert>;

export const User = createSelectSchema(user);
export const UserInsert = createInsertSchema(user);
export type User = z.infer<typeof User>;
export type UserInsert = z.infer<typeof UserInsert>;

export const OrgMembership = createSelectSchema(orgMembership);
export const OrgMembershipInsert = createInsertSchema(orgMembership);
export type OrgMembership = z.infer<typeof OrgMembership>;
export type OrgMembershipInsert = z.infer<typeof OrgMembershipInsert>;

/* World */
export const World = createSelectSchema(world);
export const WorldInsert = createInsertSchema(world);
export type World = z.infer<typeof World>;
export type WorldInsert = z.infer<typeof WorldInsert>;

/* Campaign */
export const Campaign = createSelectSchema(campaign);
export const CampaignInsert = createInsertSchema(campaign);
export type Campaign = z.infer<typeof Campaign>;
export type CampaignInsert = z.infer<typeof CampaignInsert>;

/* Note */
const Note = createSelectSchema(note);
const NoteInsert = createInsertSchema(note);
export type Note = z.infer<typeof Note>;
export type NoteInsert = z.infer<typeof NoteInsert>;

/* Session */
export const Session = createSelectSchema(session);
export const SessionInsert = createInsertSchema(session);
export type Session = z.infer<typeof Session>;
export type SessionInsert = z.infer<typeof SessionInsert>;

/* Character */
export const Character = createSelectSchema(character);
export const CharacterInsert = createInsertSchema(character);
export type Character = z.infer<typeof Character>;
export type CharacterInsert = z.infer<typeof CharacterInsert>;

/* Image */
export const Image = createSelectSchema(image);
export const ImageInsert = createInsertSchema(image);
export type Image = z.infer<typeof Image>;
export type ImageInsert = z.infer<typeof ImageInsert>;

/* Event */
export const Event = createSelectSchema(event);
export const EventInsert = createInsertSchema(event);
export type Event = z.infer<typeof Event>;
export type EventInsert = z.infer<typeof EventInsert>;
