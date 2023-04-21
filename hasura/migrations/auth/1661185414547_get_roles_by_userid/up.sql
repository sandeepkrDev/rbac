CREATE OR REPLACE FUNCTION public.get_roles_by_userid(_userid uuid)
 RETURNS SETOF user_roles
 LANGUAGE plpgsql
AS $function$
BEGIN
    return query select * from public.user_roles where user_id = _userid;
END
$function$;
