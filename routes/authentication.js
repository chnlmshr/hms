const Doctor = require("../models/Doctor");

const Patient = require("../models/Patient"),
  jwt = require("jsonwebtoken"),
  bcrypt = require("bcryptjs"),
  router = require("express").Router(),
  DocController = require("../controllers/DocController"),
  PatientController = require("../controllers/PatientController");

router.post("/registerDoctor", DocController.registerDoc);
router.post("/loginDoctor", DocController.loginDoc);
router.post("/registerPatient", PatientController.registerPat);
router.post("/loginPatient", PatientController.loginPat);

router.post("/changepassword", (req, res) => {
  const user = req.body.token.split(" ")[0],
    token = req.body.token.split(" ")[1],
    password = req.body.password,
    newpassword = req.body.newpassword;
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err || !payload) {
      res.send({ err: "Something went wrong!" });
    } else {
      if (user === "patient") {
        Patient.findById(payload._id, (err, patient) => {
          if (err || !patient) {
            res.send({ err: "Something went wrong!" });
          } else {
            bcrypt.compare(password, patient.password, (err, match) => {
              if (err) {
                res.send({ err: "Something went wrong!" });
              } else if (!match) {
                res.send({ err: "Please Enter correct old password!" });
              } else {
                bcrypt.hash(newpassword, 10, (err, hashedPass) => {
                  if (err || !hashedPass) {
                    res.send({ err: "Something went wrong!" });
                  } else {
                    Patient.findByIdAndUpdate(
                      payload._id,
                      {
                        password: hashedPass,
                        date: Math.round(Date.now() / 1000),
                      },
                      (err, patient) => {
                        if (err || !patient) {
                          res.send({ err: "Something went wrong!" });
                        } else {
                          jwt.sign(
                            { _id: patient._id },
                            process.env.JWT_SECRET,
                            (err, newtoken) => {
                              if (err || !newtoken) {
                                res.send({ err: "Something went wrong!" });
                              } else {
                                res.send({ token: newtoken, patient: true });
                              }
                            }
                          );
                        }
                      }
                    );
                  }
                });
              }
            });
          }
        });
      } else if (user === "doctor") {
        Doctor.findById(payload._id, (err, doctor) => {
          if (err || !doctor) {
            res.send({ err: "Something went wrong!" });
          } else {
            bcrypt.compare(password, doctor.password, (err, match) => {
              if (err) {
                res.send({ err: "Something went wrong!" });
              } else if (!match) {
                res.send({ err: "Please Enter correct old password!" });
              } else {
                bcrypt.hash(newpassword, 10, (err, hashedPass) => {
                  if (err || !hashedPass) {
                    res.send({ err: "Something went wrong!" });
                  } else {
                    Doctor.findByIdAndUpdate(
                      payload._id,
                      {
                        password: hashedPass,
                        date: Math.round(Date.now() / 1000),
                      },
                      (err, doctor) => {
                        if (err || !doctor) {
                          res.send({ err: "Something went wrong!" });
                        } else {
                          jwt.sign(
                            { _id: doctor._id },
                            process.env.JWT_SECRET,
                            (err, newtoken) => {
                              if (err || !newtoken) {
                                res.send({ err: "Something went wrong!" });
                              } else {
                                res.send({ token: newtoken, doctor: true });
                              }
                            }
                          );
                        }
                      }
                    );
                  }
                });
              }
            });
          }
        });
      } else {
        res.send({ err: "Something went wrong!" });
      }
    }
  });
});

module.exports = router;
