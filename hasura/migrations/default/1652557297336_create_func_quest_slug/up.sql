CREATE OR REPLACE FUNCTION quest_slug(quest_row quest)
RETURNS TEXT AS $$
  SELECT slugify(quest_row.title)
$$ LANGUAGE sql STABLE;
