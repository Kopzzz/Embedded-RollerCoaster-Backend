const express = require("express")
const app = express()
// const mqtt = require('mqtt')
const routes = require("./src/routes");

const port = process.env.PORT ||  8000
const cors = require("cors")

require("dotenv").config()
// mqtt.connect('mqtt://test.mosquitto.org')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(routes);

app.listen(port,()=>{
    console.log("connect to port",port)
})
