//KNEX SQL builder configuration file
const knex = require("knex");
const config = require("../../knexfile");
const env = "development";
const envConfig = config[env];
const db = knex(envConfig);
module.exports = db;