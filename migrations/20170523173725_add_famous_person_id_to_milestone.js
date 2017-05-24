
exports.up = function(knex, Promise) {
  return knex.schema.table('milestones', (table) => {
    // table.increments('id');
    // table.string('description');
    table.integer('famous_person_id');
    table.foreign('famous_person_id').references('famous_people.id');
    // table.date('date_achieved');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('milestones', (table) => {

    table.dropForeign('famous_person_id');
    table.dropColumn('famous_person_id');

  });
};
