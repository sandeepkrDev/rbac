const execute = require("../operations/execute");
const jwt = require("jsonwebtoken");
const ENV = require("../utils/env");
const update_password = require("../operations/functions/update_password");

async function ResetPassword({ token, newPassword, confirmPassword }) {
    if (newPassword !== confirmPassword) {
        return {
            success: false,
            message: "password is not matched!",
        }
    }

    try {
        // verify JWT token 
        const { id } = jwt.verify(token, ENV.HASURA_GRAPHQL_JWT_SECRET.key)

        // update password against email
        const { data, errors } = await execute({
            variables: { id, password: newPassword },
            query: update_password
        });

        if (errors) {
            return {
                success: false,
                message: "query execution failed!",
                data: errors[0]
            }
        }

        if (data.data) {
            const res = data.data.update_password[0]

            if (res.password !== newPassword) {
                return {
                    success: false,
                    message: "Something went wrong!",
                }
            }

            return {
                success: true,
                message: "Password updated successfully!",
            }
        } else {
            return {
                success: false,
                message: data.errors[0].message,
            }
        }
    } catch (error) {
        return {
            success: false,
            message: "token is invalid",
        }
    }
}

module.exports = ResetPassword