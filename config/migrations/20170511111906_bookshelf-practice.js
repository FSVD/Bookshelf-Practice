"use strict";

exports.up = async knex => {
        await knex.schema.createTable('authors', function(table) {
            table.increments('id').unsigned().primary();
            table.string('first_name').notNull();
            table.string('last_name');
        }),

        await knex.schema.createTable('books', function(table) {
            table.increments('id').unsigned().primary();
            table.integer('author_id').unsigned().references('authors.id'); // Foreign key to authors table
            table.string('title').notNull();
            table.integer('year');
        }),

        await knex.schema.createTable('genres', function(table) {
            table.increments('id').unsigned().primary();
            table.string('name').notNull();
        }),

        await knex.schema.createTable('books_genres', function(table) {
            table.increments('id').unsigned().primary();
            table.integer('book_id').unsigned().references('books.id');
            table.integer('genre_id').unsigned().references('genres.id');
        })
};

exports.down = async knex => {
        await knex.schema.dropTable('authors'),
        await knex.schema.dropTable('books'),
        await knex.schema.dropTable('genres'),
        await knex.schema.dropTable('books_genres')
};
