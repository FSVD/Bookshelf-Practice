// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'bookshelf-practice',
      user:     'dev',
      password: 'dev'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'bookshelf-practice',
      user:     'dev',
      password: 'dev'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'bookshelf-practice',
      user:     'dev',
      password: 'dev'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
