module.exports = `
mutation ($name: String!, $email: String!, $password: String!) {
  insert_user(
    args: {
      _name: $name,
      _email: $email,
      _password: $password
    }
  ) {
    id
    name
    email
  }
}`;