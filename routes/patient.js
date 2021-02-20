const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const PatientController=require('../controllers/PatientController')

router.post('/registerPat',PatientController.registerPat)
router.post('/loginPat',PatientController.loginPat)

module.exports=router;

