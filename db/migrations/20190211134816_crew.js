
exports.up = function(knex, Promise) {
    return knex.schema.createTable('crew', table => {
        table.increments();
        table.string('name');
        table.string('title');
        table.string('imageUrl');
        table.text('description');
        table.timestamps(true, true);

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('crew');
};
