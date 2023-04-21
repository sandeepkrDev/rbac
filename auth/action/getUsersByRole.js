const execute = require('../operations/execute');
const get_users_by_role = require('../operations/functions/get_users_by_role');

async function GetUsersByRole(roleKey) {
    const { data, errors } = await execute({
        variables: { roleKey },
        query: get_users_by_role
    });

    if (errors) {
        return {
            success: false,
            message: "query execution failed!",
            data: errors[0]
        }
    }

    if (data.data) {
        const users = data.data?.get_users_by_role
        return {
            success: true,
            message: "fetched users successfully!",
            data: users
        }
    } {
        return {
            success: false,
            message: data.errors[0].message,
            data: null
        }
    }
}

module.exports = GetUsersByRole