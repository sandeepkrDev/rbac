CREATE OR REPLACE FUNCTION public.signin(_email text, _password text)
 RETURNS SETOF users
 LANGUAGE plpgsql
AS $function$
begin
    return query select * from public.users where email = _email AND password = crypt(_password, password);
end
$function$;
