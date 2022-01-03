require("dotenv").config()
// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database:process.env.DATABASE,
      host:process.env.HOST,
      user:process.env.DB_USER,
      password:process.env.PASSWORD
    },
    migrations: {
      directory: __dirname + '/migrations',
  },
  seeds: {
      directory: __dirname + '/seeds',
  },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
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
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
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
