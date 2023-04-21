module.exports = `
mutation ($roleKey: String!) {
    get_permissions_by_role(
        args: {
            _rolename: $roleKey
        }
    ) {
        id
        role_key
        permission_key
    }
}`