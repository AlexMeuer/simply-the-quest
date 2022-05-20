CREATE OR REPLACE FUNCTION public.quest_slug(quest_row public.quests) RETURNS text
    LANGUAGE sql STABLE
    AS $$
  SELECT slugify(quest_row.title)
$$;
