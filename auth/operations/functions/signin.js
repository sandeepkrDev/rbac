module.exports = `
mutation ($email: String!, $password: String!) {
  signin(
    args: {
      _email: $email,
      _password: $password
    }
  ) {
    id
    name
    email
  }
}`;