CREATE TABLE "public"."role_permissions" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "role_key" text NOT NULL, "permission_key" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("role_key") REFERENCES "public"."roles"("key") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("permission_key") REFERENCES "public"."permissions"("key") ON UPDATE restrict ON DELETE restrict, UNIQUE ("role_key", "permission_key"));
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
CREATE TRIGGER "set_public_role_permissions_updated_at"
BEFORE UPDATE ON "public"."role_permissions"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_role_permissions_updated_at" ON "public"."role_permissions" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
