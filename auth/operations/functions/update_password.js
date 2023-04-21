module.exports = `
mutation ($id: uuid!, $password: String!) {
    update_password(
        args: {
            _userid: $id,
            _password: $password
        }
    ) {
        password
    }
}`