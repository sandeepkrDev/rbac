const execute = require('../operations/execute');
const insert_permission = require('../operations/functions/insert_permission');

async function InsertPermission({ key, value }) {
    const { data, errors } = await execute({
        variables: { key, value },
        query: insert_permission
    });

    if (errors) {
        return {
            success: false,
            message: "query execution failed!",
        }
    }

    if (data.data) {
        const res = data.data.insert_permission

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

module.exports = InsertPermission