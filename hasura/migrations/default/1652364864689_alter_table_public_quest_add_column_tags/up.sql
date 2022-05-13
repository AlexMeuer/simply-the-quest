alter table "public"."quest" add column "tags" jsonb
 not null default jsonb_build_array();
