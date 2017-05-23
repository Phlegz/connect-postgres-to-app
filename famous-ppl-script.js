const pg = require("pg");
const settings = require("./settings"); // settings.json
const client = new pg.Client(settings);
const arg = process.argv.slice(2);

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query(`SELECT * from famous_people WHERE LOWER(last_name)=LOWER('${arg}')`, (err, result) => {
    if (err) {
      console.error("error running query", err);
    } else {
      console.log(result.rows); //output: 1
    }
    client.end();
  });
});
