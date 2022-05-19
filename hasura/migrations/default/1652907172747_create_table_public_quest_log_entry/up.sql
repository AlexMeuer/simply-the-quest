CREATE TABLE "public"."quest_log_entry" ("quest_id" integer NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "title" text NOT NULL, "body" text NOT NULL, "imageURL" text NOT NULL, "status" text NOT NULL, PRIMARY KEY ("quest_id","created_at") );
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
CREATE TRIGGER "set_public_quest_log_entry_updated_at"
BEFORE UPDATE ON "public"."quest_log_entry"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_quest_log_entry_updated_at" ON "public"."quest_log_entry" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
