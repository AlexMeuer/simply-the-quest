CREATE TABLE "public"."rewards" ("quest_id" integer NOT NULL, "step" integer, "name" text NOT NULL, "description" integer, "count" integer, "imageURL" text, "value" integer, "icon" text, PRIMARY KEY ("quest_id","step") , FOREIGN KEY ("quest_id") REFERENCES "public"."quests"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("quest_id", "step") REFERENCES "public"."quest_log_entries"("quest_id", "step") ON UPDATE cascade ON DELETE cascade);
