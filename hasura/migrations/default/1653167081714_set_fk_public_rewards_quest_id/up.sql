alter table "public"."rewards"
  add constraint "rewards_quest_id_fkey"
  foreign key ("quest_id")
  references "public"."quests"
  ("id") on update cascade on delete cascade;
