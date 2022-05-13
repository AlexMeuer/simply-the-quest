alter table "public"."quest" alter column "tags" set default jsonb_build_array();
alter table "public"."quest" alter column "tags" drop not null;
alter table "public"."quest" add column "tags" jsonb;
