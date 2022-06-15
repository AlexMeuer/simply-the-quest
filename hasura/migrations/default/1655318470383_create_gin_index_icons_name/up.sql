CREATE INDEX icons_name_gin_idx ON icons
USING GIN ((name) gin_trgm_ops);
