const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//const secret = require('../config/keys').secret;
//const Doctor = require('../models/doctors');
const Patient = require("../models/patients");

router.get("/verifyPat", (req, res) => {
  const token = req.body.token;
  jwt.verify(token, "verySecretValue", (err, patient) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });
    }
    const iat = patient.iat;
    Patient.findById(patient._id)
      //.populate('')
      .exec((err, patient) => {
        if (err) res.json(err);
        else if (patient.date > iat)
          res.send({ messgae: "token expired", err: true });
        else res.send(patient);
      });
  });
});

module.exports = router;
