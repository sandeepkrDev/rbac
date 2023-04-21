const execute = require('../operations/execute');
const delete_role = require('../operations/functions/delete_role');

async function DeleteRole({ roleName }) {
    const { data, errors } = await execute({
        variables: { roleName },
        query: delete_role
    });

    if (errors) {
        return {
            success: false,
            message: "query execution failed!",
        }
    }

    if (data.data) {
        const res = data.data.delete_role

        if (res.length === 0) {
            return {
                success: false,
                message: "Role is not exist!",
            }
        }

        return {
            success: true,
            message: "Successfully delete role!",
        }
    } else {
        return {
            success: false,
            message: data.errors[0].message,
        }
    }
}

module.exports = DeleteRole