const execute = require("../operations/execute");
const get_user_by_email = require("../operations/functions/get_user_by_email");
const createJWTToken = require("./createJwtToken");

async function ForgotPassword({ email }) {
    const { data, errors } = await execute({
        variables: { email },
        query: get_user_by_email
    });

    if (errors) {
        return {
            success: false,
            message: "query execution failed!",
            data: errors[0]
        }
    }

    if (data.data) {
        let user = data.data.get_user_by_email[0];

        if (!user) {
            return {
                success: false,
                message: "User doesn't exist with this email!",
                data: null
            }
        }

        const result = await createJWTToken(user);

        return {
            success: true,
            message: "Email sent successfully!",
            data: {
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

module.exports = ForgotPassword