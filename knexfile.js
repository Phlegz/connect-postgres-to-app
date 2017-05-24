// Update with your config settings.
const settings = require("./settings"); // settings.json

module.exports = {

  development: {
    client: 'pg',
    connection: settings,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
