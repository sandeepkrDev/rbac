module.exports = `
mutation ($userID: uuid!, $roleKey: String!) {
    attach_role_to_user(
        args: {
            _userid: $userID,
            _rolekey: $roleKey
        }
    ) {
        id
    }
}`