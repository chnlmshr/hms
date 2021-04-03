const Doctor = require("../models/Doctor"),
  bcrypt = require("bcryptjs"),
  jwt = require("jsonwebtoken");

function registerDoc(req, res) {
  if (req.body.password !== req.body.confirmpassword) {
    res.send({
      err: "Password and Confirm Password doesn't match!",
    });
  } else {
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
      if (err) {
        res.send({
          err: "Something went wrong!",
        });
      } else {
        let doctor = new Doctor({
          name: req.body.name,
          email: req.body.email,
          password: hashedPass,
          phone: req.body.phone,
          degree: req.body.degree,
          speciality:req.body.speciality,
          
        });
        doctor
          .save()
          .then((doctor) => {
            let token = jwt.sign({ _id: doctor._id }, process.env.JWT_SECRET);
            if (token)
              res.send({
                token: token,
                doctor: true,
              });
            else
              res.send({
                err: "Something went wrong!",
              });
          })
          .catch((error) => {
            res.send({
              err: "Something went wrong!",
            });
          });
      }
    });
  }
}

const loginDoc = (req, res) => {
  Doctor.findOne({ email: req.body.email }).then((doctor) => {
    if (doctor) {
      bcrypt.compare(
        req.body.password,
        doctor.password,
        function (err, result) {
          if (err) {
            res.send({
              err: "Something went wrong!",
            });
          } else if (result) {
            let token = jwt.sign(
              { _id: doctor._id },
              process.env.JWT_SECRET
            );
            if (token)
              res.send({
                token: token,
                doctor: true,
              });
            else
              res.send({
                err: "Something went wrong!",
              });
          } else {
            res.send({
              err: "Email or passwoord is Wrong!",
            });
          }
        }
      );
    } else {
      res.send({
        err: "Email or passwoord is Wrong!",
      });
    }
  });
};

module.exports = {
  registerDoc,
  loginDoc,
};
