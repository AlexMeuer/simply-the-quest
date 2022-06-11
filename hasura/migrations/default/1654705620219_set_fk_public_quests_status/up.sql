alter table "public"."quests"
  add constraint "quests_status_fkey"
  foreign key ("status")
  references "public"."statuses"
  ("name") on update cascade on delete cascade;
