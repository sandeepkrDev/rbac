module.exports = `
mutation ($roleKey: String!) {
    get_users_by_role(
        args: {
            _rolekey: $roleKey
        }
    ) {
        id
        name
        email
    }
}`