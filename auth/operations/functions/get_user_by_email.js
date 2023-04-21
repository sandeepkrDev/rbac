module.exports = `
mutation ($email: String!) {
	get_user_by_email(
		args: {
			useremail: $email
		}
	) {
		id
		name
		email
		password
	}
}`