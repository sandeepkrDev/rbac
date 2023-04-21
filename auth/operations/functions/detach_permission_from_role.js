module.exports = `
mutation ($roleKey: String!, $permissionKey: String!) {
    detach_permission_from_role(
        args: {
            _permissionkey: $permissionKey,
            _rolekey: $roleKey
        }
    ) {
        id
    }
}`