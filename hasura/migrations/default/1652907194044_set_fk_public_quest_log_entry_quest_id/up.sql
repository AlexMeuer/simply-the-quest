alter table "public"."quest_log_entry"
  add constraint "quest_log_entry_quest_id_fkey"
  foreign key ("quest_id")
  references "public"."quest"
  ("id") on update cascade on delete cascade;
