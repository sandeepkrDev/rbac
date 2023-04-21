module.exports = `
mutation ($roleName: String!) {
    delete_role(
        args: {
            _rolekey: $roleName
        }
    ) {
        key
    }
}`