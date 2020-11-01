//migration schema file for feedback table
exports.up = function (knex) {
  return knex.schema.dropTableIfExists("feedback").then(() => {
    return knex.schema.createTable("feedback", (table) => {
      table.increments("id");
      table.integer("employee_id").unsigned().notNullable();
      table.foreign("employee_id").references("id").inTable("employees").onDelete('cascade');
      table.integer("review_id").unsigned().notNullable();
      table.foreign("review_id").references("id").inTable("reviews").onDelete('cascade');
      table.text("comment");
      table.date("date");
    });
  });
};

exports.down = function (knex) {
  
};
