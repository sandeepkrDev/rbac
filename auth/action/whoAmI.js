const execute = require("../operations/execute");
const get_user_by_pk = require("../operations/functions/get_user_by_pk");

async function WhoAmI({ userID }) {
    const { data, errors } = await execute({
        variables: { id: userID },
        query: get_user_by_pk
    });

    if (errors) {
        return {
            success: false,
            message: "query execution failed!",
            data: errors[0]
        }
    }

    if (data.data) {
        let user = data.data.get_user_by_pk[0];

        if (!user) {
            return {
                success: false,
                message: "User doesn't exist with this email!",
                data: null
            }
        }

        return {
            success: true,
            message: "User fetched successfully!",
            data: user
        }
    } else {
        return {
            success: false,
            message: data.errors[0].message,
            data: null
        }
    }
}

module.exports = WhoAmI