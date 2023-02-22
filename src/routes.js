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
router.post('/joinQueue', controller.joinQueue);
router.post('/leaveQueue', controller.insertQueue);
router.put('/updateQueue', controller.updateQueue);
router.delete('/deleteQueue', controller.deleteQueue);

router.get('/getTrain', controller.getTrain);
router.post('/insertTrain', controller.insertTrain);
router.delete('/deleteTrain', controller.deleteTrain);


module.exports = router;