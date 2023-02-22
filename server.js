const express = require("express")
const app = express()
const Pool = require('pg').Pool
const mqtt = require('mqtt')
const routes = require("./routes/routes");
const port = process.env.PORT ||  8000
const cors = require("cors")

require("dotenv").config()

mqtt.connect('mqtt://test.mosquitto.org')

const pool = new Pool({
  user: process.env.USER,
  host: process.env.DB_HOST,
  database: process.env.USER,
  password: process.env.DB_PASSWORD,
  port: port,
})
// const { type, wait } = {type:'regular', wait:10}
pool.query('SELECT * FROM queue ORDER BY type ASC', (error, results) => {
    if (error) {
      throw error
    }
    console.log(results.rows)
  })

// pool.query('INSERT INTO queue (type, wait) VALUES ($1, $2) RETURNING *', [type, wait], (error, results) => {
//     if (error) {
//     throw error
// }
// })

// pool.query("DELETE FROM queue WHERE type = 'regular'", [type], (error, results) => {
//     if (error) {
//         throw error
//     }
// })


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(routes);

app.listen(port,()=>{
    console.log("connect to port",port)
})
