alter table "public"."rewards"
  add constraint "rewards_step_id_quest_id_fkey"
  foreign key ("step_id", "quest_id")
  references "public"."quest_log_entries"
  ("step", "quest_id") on update cascade on delete cascade;
