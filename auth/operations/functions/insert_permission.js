module.exports = `
mutation ($key: String!, $value: String!) {
    insert_permission(
        args: {
            _permissionkey: $key
            _permissionvalue: $value
        }
    ) {
        key
    }
}`