alter table "public"."quests" alter column "tags_legacy" set default jsonb_build_array();
alter table "public"."quests" alter column "tags_legacy" drop not null;
alter table "public"."quests" add column "tags_legacy" jsonb;
