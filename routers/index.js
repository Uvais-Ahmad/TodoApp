const express = require('express');
const router = express.Router();
const home = require('../controller/home')

router.get('/',require(home.homeAction));

module.exports=router;
