/* import library */
const express = require("express")
const cors = require("cors")
const app = express()

require("dotenv").config()
const port = process.env.PORT ||  8000

// /* import model */
// const Customer = require('./customer.js')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get('/',(request,response)=>{
    response.json({
        "message":"Hello Welcome to API Nodejs"
    })
})

app.listen(port,()=>{
    console.log("connect to port",port)
})
