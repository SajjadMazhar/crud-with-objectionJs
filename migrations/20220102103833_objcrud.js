
exports.up = function(knex) {
  return knex.schema.createTable("objcrud", t=>{
      t.increments("id").primary()
      t.string("name").notNullable().unique()
      t.integer("age").notNullable()
      t.string("gender").notNullable()
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("objcrud");
};
