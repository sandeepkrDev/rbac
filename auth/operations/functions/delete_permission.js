module.exports = `
mutation ($key: String!) {
    delete_permission(
        args: {
            _permissionkey: $key
        }
    ) {
        key
    }
}`