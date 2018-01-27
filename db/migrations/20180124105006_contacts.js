exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', (table)=>{
    table.increments();
    table.string('name');
    table.string('company');
    table.string('website');
    table.string('email');
    table.string('phone');
    table.string('client_status');
    table.text('message');
    table.string('followUp_date');
    table.string('followUp_status');
    table.string('promo_offerred');
    table.string('promo_discount');
    table.string('promo_expires');
    table.string('promo_status');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts');
};
