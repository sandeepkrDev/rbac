const execute = require('../operations/execute');
const detach_role_from_user = require('../operations/functions/detach_role_from_user');

async function DetachRoleToUser({ roleKey, userID }) {
    const { data, errors } = await execute({
        variables: { roleKey, userID },
        query: detach_role_from_user
    });

    if (errors) {
        return {
            success: false,
            message: "query execution failed!",
        }
    }

    if (data.data) {
        const res = data.data.detach_role_from_user

        if (res.length === 0) {
            return {
                success: false,
                message: "Role is not attached with user!",
            }
        }

        return {
            success: true,
            message: "Successfully detached role!",
        }        
    } else {
        return {
            success: false,
            message: data.errors[0].message,
        }
    }
}

module.exports = DetachRoleToUser