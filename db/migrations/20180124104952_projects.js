exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', (table)=>{
    table.increments();
    table.string('client_name');
    table.string('company');
    table.string('project_name');
    table.string('published');
    table.string('length');
    table.string('vimeo_id');
    table.text('description');
    table.string('c1');
    table.string('c2');
    table.string('c3');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
