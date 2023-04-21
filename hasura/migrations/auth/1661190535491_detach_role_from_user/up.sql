-- DROP FUNCTION detach_role_from_user(uuid,text) 

CREATE OR REPLACE FUNCTION public.detach_role_from_user(_userID uuid, _roleKey text)
    RETURNS SETOF user_roles
    LANGUAGE plpgsql
AS $function$
DECLARE
    DELETED_DATA user_roles;
BEGIN
    return query DELETE from user_roles WHERE (user_id, role_key) = (_userID, _roleKey) RETURNING *;
END
$function$;
