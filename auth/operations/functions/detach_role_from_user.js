module.exports = `
mutation ($userID: uuid!, $roleKey: String!) {
    detach_role_from_user(
        args: {
            _userid: $userID,
            _rolekey: $roleKey
        }
    ) {
        id
    }
}`