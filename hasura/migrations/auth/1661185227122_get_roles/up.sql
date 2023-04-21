CREATE OR REPLACE FUNCTION public.get_roles()
 RETURNS SETOF roles
 LANGUAGE plpgsql
AS $function$
BEGIN
    return query select * from public.roles;
END
$function$;
