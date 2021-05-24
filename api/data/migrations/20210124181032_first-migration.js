exports.up = async function (knex) {
  await knex.schema
    .createTable('users', tbl => {
      tbl.increments('userId')
      tbl.string('username', 200).notNullable().unique()
      tbl.string('password', 200).notNullable()
      tbl.string('role', 200).notNullable()
    })
    .createTable('classes', tbl => {
      tbl.increments('classId')
      tbl.string('name', 200).notNullable()
      tbl.string('type', 200)
      tbl.string('startTime', 200)
      tbl.string('duration', 200)
      tbl.string('intensityLevel', 200)
      tbl.string('location', 200)
      tbl.integer('attendees', 100)
      tbl.integer('maxClassSize', 100)
    });
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('classes')
  await knex.schema.dropTableIfExists('users')
}
