const execute = require("../operations/execute");
const signin = require("../operations/functions/signin");
const createToken = require("./createToken");

async function SignIn({ email, password }) {
    // execute the Hasura operation
    const { data, errors } = await execute({
        variables: { email, password },
        query: signin
    });

    if (errors) {
        return {
            success: false,
            message: "query execution failed!",
            data: errors[0]
        }
    }

    if (data.data) {
        let user = data.data.signin[0];

        if (!user) {
            return {
                success: false,
                message: "User doesn't exist with this email!",
                data: null
            }
        }

        const result = await createToken(user);

        if (!result.success) {
            return result
        }

        return {
            success: true,
            message: "user Sign In successful!",
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

module.exports = SignIn