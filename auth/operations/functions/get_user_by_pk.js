module.exports = `
mutation ($id: uuid!) {
	get_user_by_pk(
		args: {
			userid: $id
		}
	) {
		id
		name
		email
		password
	}
}`