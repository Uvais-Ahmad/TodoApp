const express = require('express');
const router = express.Router();
const home = require('../controller/home')

router.get('/',home.homeAction);

router.post('/addTask',home.addTask);

module.exports=router;
