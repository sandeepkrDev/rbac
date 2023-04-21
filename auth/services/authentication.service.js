const ChangePassword = require("../action/changePassword");
const ForgotPassword = require("../action/forgotPassword");
const ResetPassword = require("../action/resetPassword");
const SignUp = require("../action/signup");
const SignIn = require("../action/singin");
const WhoAmI = require("../action/whoAmI");

/* eslint-disable indent */
module.exports = {
    name: "authentication",
    actions: {
        signin: {
            rest: "signin",
            async handler(ctx) {
                const { email, password } = ctx.params.input;

                return await SignIn({ email, password });
            }
        },
        createuser: {
            rest: "/createuser",
            async handler(ctx) {
                const { name, email, password, isSeller } = ctx.params.input;

                return await SignUp({ name, email, password, isSeller });
            }
        },
        forgotPassword: {
            rest: "forgotPassword",
            async handler(ctx) {
                const { email } = ctx.params.input;

                return await ForgotPassword({ email });
            }
        },
        resetPassword: {
            rest: "resetPassword",
            async handler(ctx) {
                const { token, newPassword, confirmPassword } = ctx.params.input;

                return await ResetPassword({ token, newPassword, confirmPassword })
            }
        },
        changePassword: {
            rest: "changePassword",
            async handler(ctx) {
                const { newPassword, confirmPassword } = ctx.params.input;

                const userID = ctx.params.session_variables['x-hasura-user-id']

                return await ChangePassword({ userID, newPassword, confirmPassword })
            }
        },
        whoAmI: {
            rest: "whoAmI",
            async handler(ctx) {
                const userID = ctx.params.session_variables['x-hasura-user-id']

                return await WhoAmI({ userID })
            }
        }
    }
};
