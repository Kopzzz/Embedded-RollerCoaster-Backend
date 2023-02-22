const Pool = require('pg').Pool
require("dotenv").config()

const pool = new Pool({
    user: process.env.USER,
    host: process.env.DB_HOST,
    database: process.env.USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  })

module.exports = pool;