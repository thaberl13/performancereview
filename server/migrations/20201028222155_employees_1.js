//Migration/Schema file for employee table
exports.up = function (knex) {
  return knex.schema.dropTableIfExists("feedback").dropTableIfExists('reviews').dropTableIfExists('employees').then(() => {
    return knex.schema.createTable("employees", (table) => {
      table.increments("id");
      table.string("first_name");
      table.string("last_name");
      table.boolean("is_admin");
    });
  });
};

exports.down = function (knex) {};
