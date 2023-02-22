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
    const type = req.body['type'];
    let wait = 0;

    pool.query(queries.getQueue, (error, results) => {
        if(error)
            throw error;
        if(type == 'regular'){
            wait = results.rows[0].wait;
        }
        else if(type == 'fast_pass'){
            wait = results.rows[1].wait;
        }
        else{
            res.status(400).send({ error: "Wrong type" });
        }

        pool.query(queries.updateWait, [type, wait+1], (error, results) => {
            if(error)
                throw error;
        });
    });

    res.status(200).send('Joined queue');
};

const leaveQueue = (req,res) => {
    const type = req.body['type'];
    let Wait = 0;

    pool.query(queries.getQueue, (error, results) => {
        if(error)
            throw error;
        if(type == 'regular'){
            Wait = results.rows[0].wait;
        }
        else if(type == 'fast_pass'){
            Wait = results.rows[1].wait;
        }
        else{
            res.status(400).send({ error: "Wrong type" });
        }

        pool.query(queries.updateWait, [type, Wait-1], (error, results) => {
            if(error)
                throw error;
        });
    });

    res.status(200).send('Leaved queue');
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

const trainArrived = (req,res) => {
    pool.query(queries.getTrain, (error, results) => {
        if(error)
            throw error;

        const depart = results.rows[0].last_depart
        const { is_arrived, sit } = { is_arrived: true, sit: 0}
        pool.query(queries.updateTrain, [depart , is_arrived, sit], (error, results) => {
            if(error)
                throw error;
            res.status(201).send('Train arrived');
        });
    });
};

const trainDeparted = (req,res) => {
    const now = new Date();
    console.log(now)
    const { is_arrived, sit } = { is_arrived: false, sit: 10}
    pool.query(queries.updateTrain, [now , is_arrived, sit ], (error, results) => {
        if(error)
            throw error;
        res.status(201).send('Train departed');
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

    getTrain,
    insertTrain,
    deleteTrain ,

    joinQueue,
    leaveQueue,
    trainArrived,
    trainDeparted,
};