CREATE OR REPLACE FUNCTION public.detach_permission_from_role(_roleKey text, _permissionKey text)
    RETURNS SETOF role_permissions
    LANGUAGE plpgsql
AS $function$
BEGIN
    return query DELETE from role_permissions WHERE (role_key, permission_key) = (_roleKey, _permissionKey) RETURNING *;
END
$function$;