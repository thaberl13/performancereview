
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        {first_name: 'Brian', last_name: 'Eno', is_admin: true},
        {first_name: 'Klaus', last_name: 'Schulze', is_admin: false},
        {first_name: 'Tanner', last_name: 'Haberl', is_admin: false},
        {first_name: 'Shun', last_name: 'Yamada', is_admin: false},
        {first_name: 'Misaki', last_name: 'Sakura', is_admin: false},
        {first_name: 'Keiko', last_name: 'Kitade', is_admin: false},
        {first_name: 'Chris', last_name: 'Durley', is_admin: false},
      ]);
    });
};
