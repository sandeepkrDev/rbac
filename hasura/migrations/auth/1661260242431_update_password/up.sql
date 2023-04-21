CREATE OR REPLACE FUNCTION public.update_password(_userid uuid, _password text)
 RETURNS SETOF users
 LANGUAGE plpgsql
AS $function$
BEGIN
    return query UPDATE users SET password = (select crypt(_password, gen_salt('bf'))) WHERE id = _userID RETURNING *;
END
$function$;
