module.exports = `
mutation ($roles: [String], $permissionKey: String!) {
    check_permission(
        args: {
            _roles: ARRAY $roles, 
            _permissionkey: $permissionKey
        }
    ) {
        permission_key
    }
}`