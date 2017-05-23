const settings = require("./settings"); // settings.json
const knex = require('knex')({
  client: 'pg',
  connection: settings,
  // searchPath: 'knex,public'
});
const arg = process.argv.slice(2);

knex.select()
  .from('famous_people')
  .where({last_name: `${arg}`})
  .then((people) => {
    console.log(people);
  })
  .catch((err) => {
    console.log(err);
  })

knex.destroy();
