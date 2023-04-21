const getRoleByUserID = `
query ($id: uuid!) {
        user_roles(where: {user_id: {_eq: $id}}) {
            role_key
        }
}`

const signin = `
query ($email: String!) {
    users(where: {email: {_eq: $email}}) {
        id
        name
        email
        password
    }
}`

const getRoles = `
query {
  roles {
    key
    created_at
    updated_at
  }
}`

const getPermissions = `
query {
  permissions {
    key
    created_at
    updated_at
  }
}`

const getPermissionsByRole = `
query ($roleKey: String!) {
  role_permissions(where: {role_key: {_eq: $roleKey}}) {
    permission_key
  }
}`

const checkPermission = `
query ($roles: [String]!, $permission: String!) {
  role_permissions(where: {role_key: {_in: $roles}, permission_key: {_eq: $permission}}, distinct_on: permission_key) {
    permission_key
  }
}`

const getUsers = `
query {
  users {
    id
    name
    email
    user_roles {
      role_key
    }
  }
}`

const getUserByPK = `
query ($id: uuid!){
  users_by_pk(id: $id) {
    id
    name
    email
    user_roles {
      role_key
    }
  }
}`

const getUserByEmail = `
query ($email: String!) {
  users(where: {email: {_eq: $email}}) {
    id
    name
    email
  }
}`

module.exports = {
  getRoleByUserID,
  signin,
  getRoles,
  getPermissions,
  getUsers,
  getPermissionsByRole,
  checkPermission,
  getUserByEmail,
  getUserByPK
}