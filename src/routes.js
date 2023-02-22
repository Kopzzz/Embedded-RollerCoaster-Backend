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

module.exports = router;