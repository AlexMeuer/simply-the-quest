CREATE TABLE "public"."quest_log_entries" ("quest_id" integer NOT NULL, "step" integer NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "title" text NOT NULL, "body" text NOT NULL, "status" text NOT NULL, "imageURL" text, PRIMARY KEY ("quest_id","step") , FOREIGN KEY ("status") REFERENCES "public"."statuses"("name") ON UPDATE restrict ON DELETE restrict);
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_quest_log_entries_updated_at"
BEFORE UPDATE ON "public"."quest_log_entries"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_quest_log_entries_updated_at" ON "public"."quest_log_entries" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
