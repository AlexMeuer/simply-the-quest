alter table "public"."rewards"
  add constraint "rewards_rarity_fkey"
  foreign key ("rarity")
  references "public"."item_rarities"
  ("name") on update cascade on delete restrict;
