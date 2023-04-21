CREATE OR REPLACE FUNCTION public.insert_user(_name text, _email text, _password text)
 RETURNS SETOF users
 LANGUAGE plpgsql
AS $function$
begin
    INSERT INTO public.users (name, email, password) 
        VALUES (
            _name, 
            _email, 
            (select crypt(_password, gen_salt('bf')))
        );
    
    return query select * from public.users where email = _email;
end
$function$;