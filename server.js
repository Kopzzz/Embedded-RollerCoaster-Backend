const express = require("express")
const app = express()
const postgres = require('pg')
const routes = require("./routes/routes");
const port = process.env.PORT ||  8000
const cors = require("cors")

require("dotenv").config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(routes);

app.listen(port,()=>{
    console.log("connect to port",port)
})
