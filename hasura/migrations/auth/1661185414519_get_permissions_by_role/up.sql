CREATE OR REPLACE FUNCTION public.get_permissions_by_role(_roleName text)
 RETURNS SETOF role_permissions
 LANGUAGE plpgsql
AS $function$
BEGIN
    return query select * from public.role_permissions where role_key = _roleName;
END
$function$;
