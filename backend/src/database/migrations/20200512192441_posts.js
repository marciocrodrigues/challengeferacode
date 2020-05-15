exports.up = function (knex) {
  return knex.schema.createTable('posts', function (table) {
    table.increments('id').primary();
    table.text('post').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.integer('user_id').notNullable();

    table.foreign('user_id').references('id').inTable('users');
  });
};

exports.down = function (knex) {
  knex.schema.dropTable('posts');
};
