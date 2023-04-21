module.exports = `
mutation ($roleKey: String!, $permissionKey: String!) {
    attach_permission_to_role(
        args: {
            _permissionkey: $permissionKey,
            _rolekey: $roleKey
        }
    ) {
        id
    }
}`