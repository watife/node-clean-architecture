require('dotenv').config({path: '../.env'})

const NODE_ENV = process.env.NODE_ENV
const PORT = process.env.PORT

const pg = {
  HOST: process.env.PG_HOST,
  USER: process.env.PG_USER,
  DATABASE: process.env.PG_DATABASE,
  PASSWORD: process.env.PG_PASSWORD,
  PORT: process.env.PG_PORT,
}

export {NODE_ENV, PORT, pg}
