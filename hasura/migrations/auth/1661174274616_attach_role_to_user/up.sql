CREATE OR REPLACE FUNCTION public.attach_role_to_user(_userid uuid, _rolekey text)
 RETURNS SETOF user_roles
 LANGUAGE plpgsql
AS $function$
begin
    INSERT INTO public.user_roles (user_id, role_key) VALUES (_userid, _rolekey);
    
    return query select * from public.user_roles where (user_id, role_key) = (_userid, _rolekey);
end
$function$;
