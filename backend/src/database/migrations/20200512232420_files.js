exports.up = function (knex) {
  return knex.schema.createTable('filesperfil', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('path').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.integer('user_id').notNullable();

    table.foreign('user_id').references('id').inTable('users');
  });
};

exports.down = function (knex) {
  knex.schema.dropTable('filesperfil');
};
