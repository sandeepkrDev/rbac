const execute = require("../operations/execute");
const update_password = require("../operations/functions/update_password");

async function ChangePassword({ userID: id, newPassword, confirmPassword }) {
    if (newPassword !== confirmPassword) {
        return {
            success: false,
            message: "password is not matched!",
        }
    }

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
}

module.exports = ChangePassword