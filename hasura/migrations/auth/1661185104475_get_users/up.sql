CREATE OR REPLACE FUNCTION public.get_users()
 RETURNS SETOF users
 LANGUAGE plpgsql
AS $function$
BEGIN
    return query select * from public.users;
END
$function$;
