CREATE OR REPLACE FUNCTION public.delete_permission(_permissionKey text)
    RETURNS SETOF permissions
    LANGUAGE plpgsql
AS $function$
BEGIN
    return query DELETE from permissions WHERE (key) = (_permissionKey) RETURNING *;
END
$function$;
