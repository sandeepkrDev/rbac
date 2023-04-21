"use strict";

const ApiGateway = require("moleculer-web");
const onError = require("../utils/onError.js");

module.exports = {
	name: "api",
	mixins: [ApiGateway],
	settings: {
		port: process.env.PORT || 3000,
		ip: "0.0.0.0",
		routes: [
			{
				path: "/api",
				whitelist: [
					"**"
				],
			}
		],
		...onError
	},
};
