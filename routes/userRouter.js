var express = require('express');
var router = express.Router();

/* GET home page. */
const userController =require("../controllers/userController")

const uploadfile=require("../middleWares/uploadFile")
router.get('/getAllUsers/',userController.getAllUsers)//lpath eli nesti bih fel postman
router.get('/getUserById/:id',userController.getUserById)
router.post('/addClient/',userController.addClient)
router.post('/addClientV2/',userController.addClientV2)
router.post('/addClientWithImage/', uploadfile.single("image_U"), userController.addClientWithImage);


module.exports = router;



