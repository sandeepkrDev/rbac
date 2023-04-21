const execute = require('../operations/execute');
const delete_permission = require('../operations/functions/delete_permission');

async function DeletePermission({ key }) {
    const { data, errors } = await execute({
        variables: { key },
        query: delete_permission
    });

    if (errors) {
        return {
            success: false,
            message: "query execution failed!",
        }
    }

    if (data.data) {
        const res = data.data.delete_permission

        if (res.length === 0) {
            return {
                success: false,
                message: "Permission is not exist!",
            }
        }

        return {
            success: true,
            message: "Successfully delete permission!",
        }
    } else {
        return {
            success: false,
            message: data.errors[0].message,
        }
    }
}

module.exports = DeletePermission