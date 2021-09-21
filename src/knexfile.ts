// Update with your config settings.
import {Knex} from 'knex'
import {pg} from './config'

interface IKnexConfig {
  [key: string]: Knex.Config
}

const knexConfigs: IKnexConfig = {
  development: {
    client: 'pg',
    connection: {
      database: pg.DATABASE,
      user: pg.USER,
      host: pg.HOST,
      password: pg.PASSWORD,
    },
    migrations: {
      directory: __dirname + '/databases/pg/migrations',
    },
    seeds: {
      directory: __dirname + '/databases/pg/seeds/development',
    },
    debug: true,
    useNullAsDefault: true,
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + '/databases/pg/migrations',
    },
  },

  production: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + '/databases/pg/migrations',
    },
  },
}

export default knexConfigs
