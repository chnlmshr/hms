const express = require("express");
const router = express.Router();

var { scoreOfDisease, Disease } = require("../models/diseases.js");
var { Patient } = require("../models/patients.js");

/*
    GET /app/ -> simply render the page
*/
router.get("/", (req, res) => {
  res.status(200).render("dashboard");
});

module.exports = router;
