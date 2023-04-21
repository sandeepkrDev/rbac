const execute = require('../operations/execute');
const attach_permission_to_role = require('../operations/functions/attach_permission_to_role');

async function AddPermissionToRole({ permissionKey, roleKey }) {
    const { data, errors } = await execute({
        variables: { permissionKey, roleKey },
        query: attach_permission_to_role
    });

    if (errors) {
        return {
            success: false,
            message: "query execution failed!",
        }
    }

    if (data.data) {
        const res = data.data.attach_permission_to_role

        if (res.length === 0) {
            return {
                success: false,
                message: "Something went wrong!",
            }
        }

        return {
            success: true,
            message: "Successfully added permission!",
        }
    } else {
        return {
            success: false,
            message: data.errors[0].message,
        }
    }
}

module.exports = AddPermissionToRole