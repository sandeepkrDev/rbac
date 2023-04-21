CREATE OR REPLACE function insert_permission(IN _permissionKey text, IN _permissionValue text)
RETURNS SETOF permissions
language plpgsql
AS $$
begin
    INSERT INTO public.permissions (key, value) VALUES (_permissionKey, _permissionValue);
    
    return query select * from public.permissions where key = _permissionKey;
end
$$;
