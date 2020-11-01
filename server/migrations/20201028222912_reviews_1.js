exports.up = function (knex) {
  return knex.schema.dropTableIfExists("reviews").then(() => {
    return knex.schema.createTable("reviews", (table) => {
      table.increments("id");
      table.integer("employee_id").unsigned().notNullable();
      table.foreign("employee_id").references("id").inTable("employees").onDelete('cascade');
      table.text("text");
      table.date("date");
    });
  });
};

exports.down = function (knex) {};
