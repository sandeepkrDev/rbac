const execute = require('../operations/execute');
const detach_permission_from_role = require('../operations/functions/detach_permission_from_role');

async function DetachPermissionToRole({ permissionKey, roleKey }) {
    const { data, errors } = await execute({
        variables: { permissionKey, roleKey },
        query: detach_permission_from_role
    });

    if (errors) {
        return {
            success: false,
            message: "query execution failed!",
        }
    }

    if (data.data) {
        const res = data.data.detach_permission_from_role

        if (res.length === 0) {
            return {
                success: false,
                message: "Permission is not attached with role!",
            }
        }

        return {
            success: true,
            message: "Successfully detached permission!",
        }
    } else {
        return {
            success: false,
            message: data.errors[0].message,
        }
    }
}

module.exports = DetachPermissionToRole