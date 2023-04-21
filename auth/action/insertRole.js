const execute = require('../operations/execute');
const insert_role = require('../operations/functions/insert_role');

async function InsertRole({ roleName }) {
    const { data, errors } = await execute({
        variables: { roleName },
        query: insert_role
    });

    if (errors) {
        return {
            success: false,
            message: "query execution failed!",
        }
    }

    if (data.data) {
        const res = data.data.insert_role

        if (res.length === 0) {
            return {
                success: false,
                message: "Something went wrong!",
            }
        }

        return {
            success: true,
            message: "Successfully added role!",
        }
    } else {
        return {
            success: false,
            message: data.errors[0].message,
        }
    }
}

module.exports = InsertRole