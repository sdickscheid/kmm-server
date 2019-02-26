
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admins').del()
    .then(function () {
      // Inserts seed entries
      return knex('admins').insert([
        {email: 't.martin49@gmail.com', password: 'test123'}
      ]);
    });
};
