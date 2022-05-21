CREATE TABLE "public"."quests" ("id" int GENERATED BY DEFAULT AS IDENTITY NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "title" text NOT NULL, "description" text NOT NULL, "giver" text NOT NULL, "tags" jsonb NOT NULL DEFAULT jsonb_build_array(), "imageURL" text, "isPublished" boolean NOT NULL, PRIMARY KEY ("id") );
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
CREATE TRIGGER "set_public_quests_updated_at"
BEFORE UPDATE ON "public"."quests"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_quests_updated_at" ON "public"."quests" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';