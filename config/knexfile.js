// Update with your config settings.

"use strict";

module.exports = {

	development: {
		client: 'mysql',
		connection: {
			database: 'bookshelf-practice',
			user: 'dev',
			password: 'dev'
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
			user: 'dev',
			password: 'dev'
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
			user: 'dev',
			password: 'dev'
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
