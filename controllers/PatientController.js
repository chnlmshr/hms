const Patient = require("../models/patients");
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const emailValidator = require("email-validator");
const expressValidator = require("express-validator");

function registerPat(req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var confirmPassword = req.body.confirmpassword;

  if (emailValidator.validate(email)) {
    console.log("valid email");
    Patient.findOne({ email }).then((patient) => {
      if (patient) {
        return res.send("Already registered");
      } else {
        if (password !== confirmPassword) {
          res.json({
            message: "Password not matched",
          });
        } else {
          bcrypt.hash(password, 10, function (err, hashedPass) {
            if (err) {
              res.json({
                message: "something went wrong!",
                error: err,
              });
            } else {
              //console.log(hash);
              let patient = new Patient({
                name: name,
                email: email,
                password: hashedPass,
                confirmpassword: confirmPassword,
                phone: req.body.phone,
                age: req.body.age,
              });

              patient
                .save()
                .then((patient) => {
                  res.status(201).json({
                    message: "Patient Added Succefully",
                    results: patient,
                  });
                })
                .catch((error) => {
                  res.json({
                    message: "An error Occured!",
                    results: error,
                  });
                });
            }
          });
        }
      }
    });
  } else {
    res.json({
      message: "enter valid email!",
    });
  }
}

const loginPat = (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  Patient.findOne({ $or: [{ email: username }, { phone: username }] }).then(
    (patient) => {
      if (patient) {
        bcrypt.compare(password, patient.password, function (err, result) {
          if (err) {
            return res.json({
              error: err,
              message: "err in comparing hash",
            });
          }
          if (result) {
            let token = jwt.sign({ _id: patient._id }, "verySecretValue");
            return res.json({
              meassage: "Login Successful",
              token: token,
            });
          } else {
            return res.json({
              message: "Password does not matched",
            });
          }
        });
      } else {
        return res.json({
          message: "No user patient found!",
        });
      }
    }
  );
};

module.exports = {
  registerPat,
  loginPat,
};
