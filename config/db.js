const environment = 'development';
const config = require("../knexfile")[environment]
const Knex = require("knex")(config)
module.exports = Knex;