const dotenv = require("dotenv");
dotenv.config();

const app = require("./webpack.config.app");

module.exports = [app];
