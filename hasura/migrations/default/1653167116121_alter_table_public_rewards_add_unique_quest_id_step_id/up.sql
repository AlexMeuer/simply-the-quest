alter table "public"."rewards" add constraint "rewards_quest_id_step_id_key" unique ("quest_id", "step_id");
