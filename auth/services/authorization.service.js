const AddRoleToUser = require("../action/addRoleToUser")
const AddPermissionToRole = require("../action/attachPermissionToRole")
const DeletePermission = require("../action/deletePermission")
const DeleteRole = require("../action/deleteRole")
const DetachPermissionToRole = require("../action/detachPermissionToRole")
const DetachRoleToUser = require("../action/detachRoleToUser")
const GetPermissions = require("../action/getPermissions")
const GetPermissionsByRole = require("../action/getPermissionsByRole")
const GetRoles = require("../action/getRoles")
const GetRolesByUserID = require("../action/getRolesByUserID")
const GetUsers = require("../action/getUsers")
const InsertPermission = require("../action/insertPermission")
const InsertRole = require("../action/insertRole")
const checkAccess = require("../methods/checkAccess")

module.exports = {
    name: "authorization",
    hooks: {
        before: {
            "*": ["checkAccess"],
        },
    },
    methods: {
        checkAccess
    },
    actions: {
        attachRoleToUser: {
            rest: "attachRoleToUser",
            async handler(ctx) {
                const { userID, roleKey } = ctx.params.input

                return await AddRoleToUser({ roleKey, userID })
            }
        },
        detachRoleToUser: {
            rest: "detachRoleToUser",
            async handler(ctx) {
                const { userID, roleKey } = ctx.params.input

                return await DetachRoleToUser({ roleKey, userID })
            }
        },
        attachPermissionToRole: {
            rest: "attachPermissionToRole",
            async handler(ctx) {
                const { permissionKey, roleKey } = ctx.params.input

                return await AddPermissionToRole({ permissionKey, roleKey })
            }
        },
        detachPermissionToRole: {
            rest: "detachPermissionToRole",
            async handler(ctx) {
                const { permissionKey, roleKey } = ctx.params.input

                return await DetachPermissionToRole({ permissionKey, roleKey })
            }
        },
        insertRole: {
            rest: "insertRole",
            async handler(ctx) {
                const { roleName } = ctx.params.input

                return await InsertRole({ roleName })
            }
        },
        deleteRole: {
            rest: "deleteRole",
            async handler(ctx) {
                const { roleName } = ctx.params.input

                return await DeleteRole({ roleName })
            }
        },
        insertPermission: {
            rest: "insertPermission",
            async handler(ctx) {
                const { key, value } = ctx.params.input

                return await InsertPermission({ key, value })
            }
        },
        deletePermission: {
            rest: "deletePermission",
            async handler(ctx) {
                const { key } = ctx.params.input

                return await DeletePermission({ key })
            }
        },
        getPermissionsByRole: {
            rest: "getPermissionsByRole",
            async handler(ctx) {
                const { roleKey } = ctx.params.input

                return await GetPermissionsByRole({ roleKey })
            }
        },
        getRolesByUserID: {
            rest: "getRolesByUserID",
            async handler(ctx) {
                const { id } = ctx.params.input

                return await GetRolesByUserID(id || 0)
            }
        },
        getUsersByRole: {
            rest: "getUsersByRole",
            async handler(ctx) {
                const { roleKey } = ctx.params.input

                return await GetUsersByRole(roleKey || "")
            }
        },

        // get all users 
        getUsers: {
            rest: "getUsers",
            async handler(ctx) {
                return await GetUsers()
            }
        },
        getRoles: {
            rest: "getRoles",
            async handler(ctx) {
                return await GetRoles()
            }
        },
        getPermissions: {
            rest: "getPermissions",
            async handler(ctx) {
                return await GetPermissions()
            }
        },
    }
}