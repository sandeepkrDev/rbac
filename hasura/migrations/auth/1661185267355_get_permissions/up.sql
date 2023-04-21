CREATE OR REPLACE FUNCTION public.get_permissions()
 RETURNS SETOF permissions
 LANGUAGE plpgsql
AS $function$
BEGIN
    return query select * from public.permissions;
END
$function$;
