const pool = require("./db");
const queries = require("./queries");

const getQueue = (req,res) => {
    pool.query(queries.getQueue, (error, results) => {
        if(error)
            throw error;
        res.status(200).json(results.rows);
    });
};

const insertQueue = (req,res) => {
    const { type, wait } = req.body
    pool.query(queries.insertQueue, [type, wait], (error, results) => {
        if(error)
            throw error;
        res.status(201).send('Queue added');
    });
};

const updateQueue = (req,res) => {
    const { type, wait } = req.body
    pool.query(queries.updateQueue, [type, wait], (error, results) => {
        if(error)
            throw error;
        res.status(201).send('Queue updated');
    });
};

const deleteQueue = (req,res) => {
    pool.query(queries.deleteQueue, (error, results) => {
        if(error)
            throw error;
        res.status(200).send('Queue deleted');
    });
};

module.exports ={
    getQueue,
    insertQueue,
    updateQueue,
    deleteQueue
};