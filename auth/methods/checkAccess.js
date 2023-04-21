const _ = require("lodash")
const checkPermission = require("../action/checkPermission.js");
const getRolesByUserID = require("../action/getRolesByUserID.js");

const CheckAccess = async (ctx) => {
    const userId = ctx.params.session_variables["x-hasura-user-id"]

    const res = await getRolesByUserID(userId || 0)

    const userRoles = _.map(res.data, "role_key", [])

    const data = await checkPermission({
        roles: userRoles,
        permission: ctx?.params?.action?.name || ""
    })

    if (!data.success) {
        throw new Error(data.message || "Message does not exists in data response!")
    }

    if (!data.data.length) {
        throw new Error("you are not authorised for this action!")
    }
};

module.exports = CheckAccess