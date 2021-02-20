const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const DocController=require('../controllers/DocController')

router.post('/registerDoc',DocController.registerDoc)
router.post('/loginDoc',DocController.loginDoc)

module.exports=router;














