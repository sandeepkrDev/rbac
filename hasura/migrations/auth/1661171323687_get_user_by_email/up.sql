CREATE OR REPLACE FUNCTION public.get_user_by_email(useremail text)
 RETURNS SETOF users
 LANGUAGE plpgsql
AS $function$
BEGIN 
    RETURN query
        SELECT * FROM users WHERE email = useremail;
END
$function$;
