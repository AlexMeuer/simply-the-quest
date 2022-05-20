alter table "public"."quest_log_entries"
  add constraint "quest_log_entries_quest_id_fkey"
  foreign key ("quest_id")
  references "public"."quests"
  ("id") on update cascade on delete cascade;
