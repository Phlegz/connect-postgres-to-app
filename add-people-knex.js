const settings = require("./settings"); // settings.json
const knex = require('knex')({
  client: 'pg',
  connection: settings,
  // searchPath: 'knex,public'
});
const arg = process.argv.slice(2);

// knex('famous_people').insert({firs_name: `${arg[0]}`},{last_name:`${arg[1]}`},{birthdate:`${arg[2]}`})
knex('famous_people').insert({first_name:`${arg[0]}`,last_name:`${arg[1]}`,birthdate:`${arg[2]}`})
  .then(() => {
        console.log('famous person added');  // respond back to request
   })



// knex('books').insert({title: 'Slaughterhouse Five'})
// knex.select()
//   .from('famous_people')
//   .where({last_name: `${arg}`})
//   .then((people) => {
//     console.log(people);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//
knex.destroy();
