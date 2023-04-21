module.exports = `
mutation ($roleName: String!) {
    insert_role(
        args: {
            _rolename: $roleName
        }
    ) {
        key
    }
}`