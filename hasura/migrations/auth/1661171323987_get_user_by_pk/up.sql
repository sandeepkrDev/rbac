CREATE OR REPLACE FUNCTION public.get_user_by_pk(userid uuid)
 RETURNS SETOF users
 LANGUAGE plpgsql
AS $function$
BEGIN 
    RETURN query
        SELECT * FROM users WHERE id = userid;
END
$function$;
