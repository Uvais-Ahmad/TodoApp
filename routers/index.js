const express = require('express');
const router = express.Router();
const home = require('../controller/home')

router.get('/',home.homeAction);

router.post('/addTask',home.addTask);

router.get('/deleteTask',home.delTask);

module.exports=router;
