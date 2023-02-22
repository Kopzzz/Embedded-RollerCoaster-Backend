const getQueue = "SELECT * FROM queue";
const insertQueue = "INSERT INTO queue (type, wait) VALUES ($1, $2)";
const updateQueue = "UPDATE queue SET wait = $2 WHERE type = $1";
const deleteQueue = "DELETE FROM queue";


module.exports ={
    getQueue, 
    insertQueue,
    updateQueue,
    deleteQueue,
};