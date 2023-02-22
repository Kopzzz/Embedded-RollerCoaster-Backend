const getQueue = "SELECT * FROM queue";
const insertQueue = "INSERT INTO queue (type, wait, estimate_time, out, is_open) VALUES ($1, $2, $3, $4, $5)";
const deleteQueue = "DELETE FROM queue";
const updateWait = "UPDATE queue SET wait = $2 WHERE type = $1";
const updateTime = "UPDATE queue SET estimate_time = $2 WHERE type = $1";
const updateOut = "UPDATE queue SET out = $2 WHERE type = $1";
const updateOpen = "UPDATE queue SET is_open = $2 WHERE type = $1";

const getTrain = "SELECT * FROM train";
const insertTrain = "INSERT INTO train (last_depart, is_arrived, sit) VALUES ($1, $2, $3)";
const updateTrain = "UPDATE train SET last_depart =$1, is_arrived = $2, sit = $3";
const deleteTrain = "DELETE FROM train";



module.exports ={
    getQueue, 
    insertQueue,
    deleteQueue,
    updateWait,
    updateTime,
    updateOut,
    updateOpen,

    getTrain,
    insertTrain,
    deleteTrain,
    updateTrain,
};