const execute = require('../operations/execute');
const attach_role_to_user = require('../operations/functions/attach_role_to_user');

async function AddRoleToUser({ roleKey, userID }) {
    const { data, errors } = await execute({
        variables: { roleKey, userID },
        query: attach_role_to_user
    });

    if (errors) {
        return {
            success: false,
            message: "query execution failed!",
        }
    }

    if (data.data) {
        const res = data.data.attach_role_to_user

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

module.exports = AddRoleToUser