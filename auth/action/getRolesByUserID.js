const execute = require('../operations/execute');
const get_roles_by_userid = require('../operations/functions/get_roles_by_userid');

async function GetRolesByUserID(id) {
    const { data, errors } = await execute({
        variables: { id },
        query: get_roles_by_userid
    });

    if (errors) {
        return {
            success: false,
            message: "query execution failed!",
            data: errors[0]
        }
    }

    if (data.data) {
        const roles = data.data?.get_roles_by_userid
        return {
            success: true,
            message: "fetched roles successfully!",
            data: roles
        }
    } {
        return {
            success: false,
            message: data.errors[0].message,
            data: null
        }
    }
}

module.exports = GetRolesByUserID