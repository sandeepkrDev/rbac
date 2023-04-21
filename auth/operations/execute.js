const axios = require('axios')
const ENV = require("../utils/env");

module.exports = async ({ variables, query }) => {
    const headers = {
        "content-type": "application/json",
        "x-hasura-admin-secret": ENV.HASURA_GRAPHQL_ADMIN_SECRET
    };

    const data = await axios({
        url: "http://localhost:8080/v1/graphql",
        method: 'POST',
        headers: headers,
        data: {
            query,
            variables
        }
    });
    return data;
};