CREATE OR REPLACE function insert_role(IN _roleName text)
RETURNS SETOF roles
language plpgsql
AS $$
begin
    INSERT INTO public.roles (key) VALUES (_roleName);
    
    return query select * from public.roles where key = _roleName;
end
$$;
