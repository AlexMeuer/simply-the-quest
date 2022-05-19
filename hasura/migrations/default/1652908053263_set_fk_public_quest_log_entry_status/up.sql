alter table "public"."quest_log_entry"
  add constraint "quest_log_entry_status_fkey"
  foreign key ("status")
  references "public"."statuses"
  ("name") on update restrict on delete restrict;
