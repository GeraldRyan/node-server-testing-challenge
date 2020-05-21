
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bands').del()
    .then(function () {
      // Inserts seed entries
      return knex('bands').insert([
        {index: 1, name: 'Metallica', genre: "Metal", ranking: 10},
        {index: 2, name: 'Powerwolf', genre: "Metal", ranking: 10},
        {index: 3, name: 'Epica', genre: "Metal", ranking: 10},
        {index: 4, name: 'Woods of Ypres', genre: "FolkMetal", ranking: 10}

      ]);
    });
};
