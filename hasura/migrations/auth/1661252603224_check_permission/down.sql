-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE OR REPLACE FUNCTION public.check_permission(_roles text[], _permissionkey text)
--  RETURNS SETOF role_permissions
--  LANGUAGE plpgsql
-- AS $function$
-- BEGIN
--     return query select * from public.role_permissions
--         where role_key = ANY($1) AND permission_key = ($2);
-- END
-- $function$;
