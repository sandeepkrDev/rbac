CREATE OR REPLACE FUNCTION public.delete_role(_roleKey text)
    RETURNS SETOF roles
    LANGUAGE plpgsql
AS $function$
BEGIN
    return query DELETE from roles WHERE (key) = (_roleKey) RETURNING *;
END
$function$;
