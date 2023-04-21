CREATE OR REPLACE FUNCTION public.attach_permission_to_role(_rolekey text, _permissionkey text)
 RETURNS SETOF role_permissions
 LANGUAGE plpgsql
AS $function$
begin
    INSERT INTO public.role_permissions (role_key, permission_key) VALUES (_roleKey, _permissionKey);
    
    return query select * from public.role_permissions where (role_key, permission_key) = (_roleKey, _permissionKey);
end
$function$;