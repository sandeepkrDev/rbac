const execute = require('../operations/execute');
const get_permissions_by_role = require('../operations/functions/get_permissions_by_role');

async function GetPermissionsByRole({ roleKey }) {
    const { data, errors } = await execute({
        variables: { roleKey },
        query: get_permissions_by_role
    });

    if (errors) {
        return {
            success: false,
            message: "query execution failed!",
        }
    }

    if (data.data) {
        return {
            success: true,
            message: "Successfully fetched permissions!",
            data: data.data.get_permissions_by_role
        }
    } else {
        return {
            success: false,
            message: data.errors[0].message,
        }
    }
}

module.exports = GetPermissionsByRole