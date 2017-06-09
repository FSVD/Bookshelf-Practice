// Update with your config settings.

"use strict";

require('dotenv').config();

module.exports = {

	development: {
		client: 'mysql',
		connection: {
			database: 'bookshelf-practice',
			user: process.env.DEVELOPMENT_DB_USER,
			password: process.env.DEVELOPMENT_DB_PASSWORD
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: __dirname + '/migrations',
			tableName: 'knex_migrations'
		}
	},

	staging: {
		client: 'mysql',
		connection: {
			database: 'bookshelf-practice-staging',
			user: process.env.STAGING_DB_USER,
			password: process.env.STAGING_DB_PASSWORD
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: __dirname + '/migrations',
			tableName: 'knex_migrations'
		}
	},

	production: {
		client: 'mysql',
		connection: {
			database: 'bookshelf-practice-production',
			user: process.env.PRODUCTION_DB_USER,
			password: process.env.PRODUCTION_DB_PASSWORD
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: __dirname + '/migrations',
			tableName: 'knex_migrations'
		}
	}

};
