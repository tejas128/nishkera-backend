const router = require('express').Router();
const controller=require("./controller")
router.post("/",controller.createuser)



module.exports=router