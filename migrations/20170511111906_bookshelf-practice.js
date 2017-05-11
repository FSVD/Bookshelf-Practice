
exports.up = function(knex, Promise) {

    return Promise.all([

        knex.schema.createTable('authors', function(table) {
            table.increments('id').unsigned().primary();
            table.string('first_name').notNull();
            table.string('last_name');
        }),

        knex.schema.createTable('books', function(table) {
            table.increments('id').unsigned().primary();
            table.integer('author_id').unsigned().references('authors.id'); // Foreign key to authors table
            table.string('title').notNull();
            table.integer('year');
        }),

        knex.schema.createTable('genres', function(table) {
            table.increments('id').unsigned().primary();
            table.string('name').notNull();
        }),

        knex.schema.createTable('books_genres', function(table) {
            table.increments('id').unsigned().primary();
            table.integer('book_id').unsigned().references('books.id');
            table.integer('genre_id').unsigned().references('genres.id');
        })
    ])
};

exports.down = function(knex, Promise) {

    return Promise.all([

        knex.schema.dropTable('authors'),
        knex.schema.dropTable('books'),
        knex.schema.dropTable('genres'),
        knex.schema.dropTable('books_genres')
    ])
};
