const Doctor = require("../models/doctors");
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const emailValidator = require("email-validator");
const expressValidator = require("express-validator");

function registerDoc(req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var confirmPassword = req.body.confirmpassword;
  if (emailValidator.validate(email)) {
    console.log("valid email");

    expressValidator
      .check("email")

      // To delete leading and triling space
      .trim()

      // Normalizing the email address
      .normalizeEmail()

      // Checking if follow the email
      // address formet or not
      .isEmail()

      // Custom message
      .withMessage("Invalid email")

      // Custom validation
      // Validate email in use or not
      .custom(async (email) => {
        const existingUser = await repo.getOneBy({ email });

        if (existingUser) {
          throw new Error("Email already in use");
        }
      });
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
          let doctor = new Doctor({
            name: name,
            email: email,
            password: hashedPass,
            confirmpassword: confirmPassword,
            phone: req.body.phone,
            degree: req.body.degree,
          });

          doctor
            .save()
            .then((doctor) => {
              res.status(201).json({
                message: "Doctor Added Succefully",
                results: doctor,
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
  } else {
    res.json({
      message: "enter valid email!",
    });
  }
}

const loginDoc = (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  Doctor.findOne({ $or: [{ email: username }, { phone: username }] }).then(
    (doctor) => {
      if (doctor) {
        bcrypt.compare(password, doctor.password, function (err, result) {
          if (err) {
            res.json({
              error: err,
            });
          }
          if (result) {
            let token = jwt.sign({ name: doctor.name }, "verySecretValue", {
              expiresIn: "1h",
            });
            res.json({
              meassage: "Login Successful",
              token: token,
            });
          } else {
            res.json({
              message: "Password does not matched",
            });
          }
        });
      } else {
        res.json({
          message: "No doctor found!",
        });
      }
    }
  );
};

module.exports = {
  registerDoc,
  loginDoc,
};
