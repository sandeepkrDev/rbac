CREATE OR REPLACE FUNCTION public.get_users_by_role(_rolekey text)
 RETURNS SETOF user_roles
 LANGUAGE plpgsql
AS $function$
BEGIN
    return query select * from public.user_roles inner join user on role_key = $1;
END
$function$;
