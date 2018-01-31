exports.up = function(knex, Promise) {
  return knex.schema.createTable('admins', (table)=>{
    table.increments();
    table.string('email');
    table.string('password');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('admins');
};
