const dotEnv = require("dotenv");

dotEnv.config();

const port = process.env.APP_PORT;

module.exports = dotEnv;
