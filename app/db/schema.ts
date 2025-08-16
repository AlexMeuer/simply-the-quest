import {
  integer,
  jsonb,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

/*
───────────────────────────────────────────────────────────────────────────────
 ENUMS
──────────────────────────────────────────────────────────────────────────────*/
export const roleEnum = pgEnum("role", ["player", "gm", "owner"]);

/*────────────────────────────────────────────────────────────────────────────
  HELPERS
────────────────────────────────────────────────────────────────────────────*/
const id = () => uuid("id").primaryKey().defaultRandom();
const timestamps = {
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdateFn(() => new Date()),
} as const;

/*────────────────────────────────────────────────────────────────────────────
  ORGANISATION / TENANCY
────────────────────────────────────────────────────────────────────────────*/
export const organisation = pgTable("organization", {
  id: id(),
  name: text("name").notNull(),
  ...timestamps,
});

export const world = pgTable("world", {
  id: id(),
  orgId: uuid("org_id")
    .references(() => organisation.id)
    .notNull(),
  name: text("name").notNull(),
  descriptionMd: text("description_md"),
  ...timestamps,
});

export const campaign = pgTable("campaign", {
  id: id(),
  worldId: uuid("world_id")
    .references(() => world.id)
    .notNull(),
  name: text("name").notNull(),
  ...timestamps,
});

/*────────────────────────────────────────────────────────────────────────────
  AUTH
────────────────────────────────────────────────────────────────────────────*/
export const user = pgTable("user", {
  id: id(),
  email: text("email").unique().notNull(),
  displayName: text("display_name").notNull(),
  ...timestamps,
});

export const authSession = pgTable("auth_session", {
  id: text("id").primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => user.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

export const passwordCredential = pgTable("password_credential", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .references(() => user.id)
    .notNull()
    .unique(),
  hash: text("hash").notNull(),
  ...timestamps,
});

export const orgMembership = pgTable(
  "org_membership",
  {
    orgId: uuid("org_id")
      .references(() => organisation.id)
      .notNull(),
    userId: uuid("user_id")
      .references(() => user.id)
      .notNull(),
    role: roleEnum("role").notNull().default("player"),
  },
  (t) => [primaryKey({ columns: [t.orgId, t.userId] })],
);

/*────────────────────────────────────────────────────────────────────────────
  GAMEPLAY – WORLD‑SCOPED
────────────────────────────────────────────────────────────────────────────*/
export const character = pgTable("character", {
  id: id(),
  worldId: uuid("world_id")
    .references(() => world.id)
    .notNull(),
  ownerId: uuid("owner_id").references(() => user.id),
  displayName: text("display_name").notNull(),
  status: text("status").default("alive"),
  bioMd: text("bio_md"),
  ...timestamps,
});

export const note = pgTable("note", {
  id: id(),
  worldId: uuid("world_id")
    .references(() => world.id)
    .notNull(),
  title: text("title").notNull(),
  bodyMd: text("body_md"),
  authorId: uuid("author_id").references(() => user.id),
  ...timestamps,
});

export const faction = pgTable("faction", {
  id: id(),
  worldId: uuid("world_id")
    .references(() => world.id)
    .notNull(),
  name: text("name").notNull(),
  descriptionMd: text("description_md"),
  ...timestamps,
});

export const location = pgTable("location", {
  id: id(),
  worldId: uuid("world_id")
    .references(() => world.id)
    .notNull(),
  name: text("name").notNull(),
  descriptionMd: text("description_md"),
  ...timestamps,
});

export const item = pgTable("item", {
  id: id(),
  worldId: uuid("world_id")
    .references(() => world.id)
    .notNull(),
  name: text("name").notNull(),
  descriptionMd: text("description_md"),
  ...timestamps,
});

export const image = pgTable("image", {
  id: id(),
  worldId: uuid("world_id")
    .references(() => world.id)
    .notNull(),
  fileKey: text("file_key").notNull(),
  altText: text("alt_text"),
  width: integer("width"),
  height: integer("height"),
  ...timestamps,
});

/*────────────────────────────────────────────────────────────────────────────
  GAMEPLAY – CAMPAIGN‑SCOPED
────────────────────────────────────────────────────────────────────────────*/
export const quest = pgTable("quest", {
  id: id(),
  campaignId: uuid("campaign_id")
    .references(() => campaign.id)
    .notNull(),
  title: text("title").notNull(),
  status: text("status").default("open"),
  descriptionMd: text("description_md"),
  ...timestamps,
});

export const gameSession = pgTable("game_session", {
  id: id(),
  campaignId: uuid("campaign_id")
    .references(() => campaign.id)
    .notNull(),
  index: integer("index").notNull(),
  date: timestamp("date").notNull(),
  summaryMd: text("summary_md"),
});

export const event = pgTable("event", {
  id: id(),
  campaignId: uuid("campaign_id")
    .references(() => campaign.id)
    .notNull(),
  kind: text("kind").notNull(),
  payload: jsonb("payload"),
  occurredAt: timestamp("occurred_at").notNull(),
  ...timestamps,
});

/*────────────────────────────────────────────────────────────────────────────
  EXPORT COMBINED SCHEMA
────────────────────────────────────────────────────────────────────────────*/
export const schema = {
  organisation,
  world,
  campaign,
  user,
  authSession,
  orgMembership,
  character,
  note,
  image,
  quest,
  gameSession,
  event,
};
