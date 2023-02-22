const express = require("express");
const router = express.Router();

require("dotenv").config();

router.get('/',(req,res)=>{
    res.send({
        "message":"Hello Welcome to API Nodejs"
    })
})

module.exports = router;