const jwt = require("jsonwebtoken");
const ENV = require("../utils/env");
const GetRolesByUserID = require("./getRolesByUserID");

async function createJWTToken({ id, email }) {
    const tokenContents = {
        id: id.toString(),
        email,
        iat: Date.now() / 1000,
    }

    const token = jwt.sign(tokenContents, ENV.HASURA_GRAPHQL_JWT_SECRET.key, {
        ...ENV.JWT_CONFIG,
        expiresIn: `1440m`,
    });

    return {
        success: true,
        message: "token created successfully!",
        data: {
            token
        }
    }
}

module.exports = createJWTToken