const dotEnv = require("dotenv");
const config = dotEnv.config();

const port = process.env.APP_PORT;

module.exports = config;
