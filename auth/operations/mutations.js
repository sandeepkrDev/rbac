const signup = `
mutation ($name: String!, $email: String!, $password: String!) {
  insert_users_one(object: {
    name: $name,
    email: $email,
    password: $password
  }) {
    id
    name
    email
  }
}`;

const insertUserRole = `
mutation ($roleKey: String!, $userID: uuid!) {
    insert_user_roles_one(object: { role_key: $roleKey, user_id: $userID }) {
        id
    }
}`;

const deleteUserRole = `
mutation ($roleKey: String!, $userID: uuid!) {
  delete_user_roles(where: {user_id: {_eq: $userID}, role_key: {_eq: $roleKey}}) {
    affected_rows
  }
}`;

const insertPermissionToRole = `
mutation ($permissionKey: String!, $roleKey: String!) {
  insert_role_permissions_one(object: {permission_key: $permissionKey, role_key: $roleKey}) {
    id
  }
}`

const deletePermissionToRole = `
mutation ($permissionKey: String!, $roleKey: String!) {
  delete_role_permissions(where: {permission_key: {_eq: $permissionKey}, role_key: {_eq: $roleKey}}) {
    affected_rows
  }
}`

const insertRole = `
mutation ($roleName: String!) {
  insert_roles(objects: {key: $roleName}) {
    affected_rows
  }
}`

const deleteRole = `
mutation ($roleName: String!) {
  delete_roles(where: {key: {_eq: $roleName}}) {
    affected_rows
  }
}`

const insertPermission = `
mutation ($permissionName: String!) {
  insert_permissions(objects: {key: $permissionName}) {
    affected_rows
  }
}`

const deletePermission = `
mutation ($permissionName: String!) {
  delete_permissions(where: {key: {_eq: $permissionName}}) {
    affected_rows
  }
}`

const updatePasswordByPk = `
mutation ($id: uuid!, $password: String!) {
  update_users_by_pk(pk_columns: {id: $id}, _set: {password: $password}) {
    password
  }
}`

module.exports = {
  signup,
  insertUserRole,
  deleteUserRole,
  insertPermissionToRole,
  deletePermissionToRole,
  insertRole,
  deleteRole,
  insertPermission,
  deletePermission,
  updatePasswordByPk
}