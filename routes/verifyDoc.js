const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//const secret = require('../config/keys').secret;
const Doctor = require('../models/doctors');
//const Patient = require('../models/patients');

router.get('/verifyDoc', (req, res) => {
    jwt.verify( req.body.token,'verySecretValue' , (err, doctor) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }
        Doctor.findById(doctor._id)
            //.populate('')
            .exec((err, doctor) => {
                if(err) res.json(err);
                else res.send(doctor);
            });
    });
});

  

module.exports = router;