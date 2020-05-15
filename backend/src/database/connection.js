const knex = require('knex');
const configuration = require('../../knexfile');

const config = configuration.development;
const conneciton = knex(config);
module.exports = conneciton;
