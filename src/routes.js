const express = require("express");
const router = express.Router();
const controller = require("./controller");


router.get('/',(req,res)=>{
    res.send({
        "message":"Hello Welcome to Roller Coaster"
    })
})

router.get('/getQueue', controller.getQueue);
router.post('/insertQueue', controller.insertQueue);
router.put('/updateQueue', controller.updateQueue);
router.delete('/deleteQueue', controller.deleteQueue);

router.get('/getTrain', controller.getTrain);
router.post('/insertTrain', controller.insertTrain);
router.delete('/deleteTrain', controller.deleteTrain);

router.put('/joinQueue', controller.joinQueue);
router.put('/leaveQueue', controller.leaveQueue);
router.put('/trainArrived', controller.trainArrived);
router.put('/trainDeparted', controller.trainDeparted);

module.exports = router;