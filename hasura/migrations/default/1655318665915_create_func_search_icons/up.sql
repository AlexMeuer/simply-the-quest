CREATE OR REPLACE FUNCTION search_icons(search text) 
returns setof icons AS $$ 
SELECT   * 
FROM     icons 
WHERE    search <% ( NAME ) 
ORDER BY similarity(search, ( NAME )) DESC limit 5; 

$$ language sql stable;
