CREATE OR REPLACE FUNCTION public.search_icons(search text)
 RETURNS SETOF icons
 LANGUAGE sql
 STABLE
AS $function$ 
SELECT   * 
FROM     icons 
WHERE    search <% ( NAME ) 
ORDER BY similarity(search, ( NAME )) DESC; 

$function$;
