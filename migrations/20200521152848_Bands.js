
exports.up = function (knex)
{
  return knex.schema
    .createTable('bands', tbl =>
    {
      tbl.increments('index')
      tbl.string('name', 128).unique().notNullable()
      tbl.string('genre', 24)
      tbl.integer('ranking').unsigned()
    })

    // return ("create table `bands` (`index` integer not null primary key autoincrement, `name` varchar(128) not null, `genre` varchar(24), `ranking` integer); create unique index `bands_name_unique` on `bands` (`name`)")  // Does not work as expected
};

// create table `bands` (`index` integer not null primary key autoincrement, `name` varchar(128) not null, `genre` varchar(24), `ranking` integer); create unique index `bands_name_unique` on `bands` (`name`)
exports.down = function (knex)
{
  return knex.schema.dropTableIfExists('bands')
};
