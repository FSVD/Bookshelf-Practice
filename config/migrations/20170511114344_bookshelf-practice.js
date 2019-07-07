"use strict";

exports.up = async  knex => {
    await knex.schema.table('authors', function (table) { // Add columns to authors table
        table.string('nickname');
    }),

    await knex.schema.table('books', function (table) { // Add columns to authors table
        table.integer('isbn');
    })
};

exports.down = async knex => {
    await knex.schema.table('authors', function (table) {
        table.dropColumn('nickname')
    }),

    await knex.schema.table('books', function (table) {
        table.dropColumn('isbn')
    })
};
