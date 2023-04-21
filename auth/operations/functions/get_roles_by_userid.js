module.exports = `
mutation ($id: uuid!) {
    get_roles_by_userid(
        args: {
            _userid: $id
        }
    ) {
        role_key
    }
}`