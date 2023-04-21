const execute = require('../operations/execute');
const get_roles = require('../operations/functions/get_roles');

async function GetRoles() {
    const { data, errors } = await execute({
        variables: {},
        query: get_roles
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
            message: "Successfully fetched roles!",
            data: data.data.get_roles
        }
    } else {
        return {
            success: false,
            message: data.errors[0].message,
        }
    }
}

module.exports = GetRoles