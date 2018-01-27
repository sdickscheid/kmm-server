exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', (table)=>{
    table.increments();
    table.string('client_name');
    table.string('company');
    table.string('project_name');
    table.string('date_published');
    table.string('runtime');
    table.string('vimeo_id');
    table.text('description');
    table.string('category_1');
    table.string('category_2');
    table.string('category_3');
    table.string('category_4');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
