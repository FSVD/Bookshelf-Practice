"use strict";

exports.up = function(knex, Promise) {

    return Promise.all([

        knex.schema.table('authors', function(table) { // Add columns to authors table
            table.string('nickname');
        }),

        knex.schema.table('books', function(table) { // Add columns to authors table
            table.integer('isbn');
        })
    ])
};

exports.down = function(knex, Promise) {

    return Promise.all([

        knex.schema.table('authors', function(table) { 
            table.dropColumn('nickname')
        }),

        knex.schema.table('books', function(table) {
            table.dropColumn('isbn')
        })
    ])
};
