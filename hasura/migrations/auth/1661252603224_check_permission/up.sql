CREATE OR REPLACE FUNCTION public.check_permission(_roles text[], _permissionkey text)
 RETURNS SETOF role_permissions
 LANGUAGE plpgsql
AS $function$
BEGIN
    return query select * from public.role_permissions 
        where role_key = ANY($1) AND permission_key = ($2);
END
$function$;
