const execute = require('../operations/execute');
const get_users = require('../operations/functions/get_users');

async function GetUsers() {
    const { data, errors } = await execute({
        variables: {},
        query: get_users
    });

    if (errors) {
        return {
            success: false,
            message: "query execution failed!",
        }
    }

    if (data.data) {
        return {
            success: true,
            message: "Successfully fetched users!",
            data: data.data.get_users
        }
    } else {
        return {
            success: false,
            message: data.errors[0].message,
        }
    }
}

module.exports = GetUsers