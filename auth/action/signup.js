const execute = require("../operations/execute");
const insert_user = require("../operations/functions/insert_user");
const ENV = require("../utils/env");
const AddRoleToUser = require("./addRoleToUser");
const createToken = require("./createToken");

async function SignUp({ name, email, password, isSeller }) {
    // execute the Hasura operation
    const { data, errors } = await execute({
        variables: { name, email, password },
        query: insert_user
    });
    // if Hasura operation errors, then throw error
    if (errors) {
        return {
            success: false,
            message: "query execution failed!",
            data: errors[0]
        }
    }

    if (data.data) {
        const user = data.data.insert_user[0]
        const userID = user.id

        let roleKeys = ['user']

        if (isSeller) {
            roleKeys = ['user', 'seller']
        }

        if (user.email === ENV.SUPER_ADMIN_EMAIL) {
            roleKeys = ['user', 'super_admin']
        }

        for (let i = 0; i < roleKeys.length; i++) {
            const res = await AddRoleToUser({ roleKey: roleKeys[i], userID })

            if (!res.success) {
                return res
            }
        }

        const result = await createToken(user)

        if (!result.success) {
            return res
        }

        return {
            success: true,
            message: "user Sign up successful!",
            data: {
                id: user.id,
                name: user.name,
                email: user.email,
                roles: result.data.roles,
                token: result.data.token
            }
        }
    } else {
        return {
            success: false,
            message: data.errors[0].message,
            data: null
        }
    }
}

module.exports = SignUp