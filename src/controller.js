const pool = require("./db");
const queries = require("./queries");

const getQueue = (req,res) => {
    pool.query(queries.getQueue, (error, results) => {
        if(error)
            throw error;
        res.status(200).json(results.rows);
    });
};

module.exports ={
    getQueue,
};