let knex = require("knex");

let knexfile = require("../knexfile");

let knexconfig = knexfile.development;

module.exports = knex(knexconfig)