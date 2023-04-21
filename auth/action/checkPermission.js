const execute = require('../operations/execute');
const { checkPermission } = require('../operations/queries');

async function CheckPermission({ roles, permission }) {
    const { data, errors } = await execute({
        variables: { roles, permission },
        query: checkPermission
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
            data: data.data.role_permissions
        }
    } else {
        console.log("failed")
        return {
            success: false,
            message: data.errors[0].message,
        }
    }
}

module.exports = CheckPermission