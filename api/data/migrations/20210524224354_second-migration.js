exports.up = async function (knex) {
  await knex.schema
    .createTable('classes', tbl => {
      tbl.increments('classId')
      tbl.string('name', 200).notNullable()
      tbl.string('type', 200)
      tbl.string('startTime', 200)
      tbl.string('duration', 200)
      tbl.string('intensityLevel', 200)
      tbl.string('location', 200)
      tbl.integer('attendees').defaultTo(0)
      tbl.integer('maxClassSize').defaultTo(20)
      tbl.integer('userId')
        .notNullable()
        .unsigned()
        .references('userId')
        .inTable('users')
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('classes');  
};
