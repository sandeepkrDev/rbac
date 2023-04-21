const execute = require('../operations/execute');
const get_permissions = require('../operations/functions/get_permissions');

async function GetPermissions() {
    const { data, errors } = await execute({
        variables: {},
        query: get_permissions
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
            data: data.data.get_permissions
        }
    } else {
        return {
            success: false,
            message: data.errors[0].message,
        }
    }
}

module.exports = GetPermissions