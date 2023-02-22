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
    const { type, wait, estimate_time, out, is_open } = req.body
    pool.query(queries.insertQueue, [type, wait, estimate_time, out, is_open ], (error, results) => {
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

const joinQueue = (req,res) => {
    // pool.query(queries.getQueue, (error, results) => {
    //     if(error)
    //         throw error;
    //     const test = results.rows;
    // });
    // console.log(pool.query(queries.getQueue))
    // const type = req.body;
    res.status(200);
    // pool.query(queries.updateQueue, [type, wait], (error, results) => {
    //     if(error)
    //         throw error;
    //     res.status(201).send('Queue updated');
    // });
};

const getTrain = (req,res) => {
    pool.query(queries.getTrain, (error, results) => {
        if(error)
            throw error;
        res.status(200).json(results.rows);
    });
};

const insertTrain = (req,res) => {
    const now = new Date();
    console.log(now)
    const { is_arrived, sit } = { is_arrived: true, sit: 0}
    pool.query(queries.insertTrain, [now , is_arrived, sit ], (error, results) => {
        if(error)
            throw error;
        res.status(201).send('Train added');
    });
};

const deleteTrain = (req,res) => {
    pool.query(queries.deleteTrain, (error, results) => {
        if(error)
            throw error;
        res.status(200).send('Train deleted');
    });
};

module.exports ={
    getQueue,
    insertQueue,
    updateQueue,
    deleteQueue,
    joinQueue,

    getTrain,
    insertTrain,
    deleteTrain ,
};