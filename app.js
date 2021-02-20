const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const _ = require("lodash");
mongoose.Promise = global.Promise;
const app = express();
const cors = require("cors");

var conn = mongoose.Connection;
//connect to mongodb
mongoose.connect(
  "mongodb+srv://hms:bluebloodsnowman@cluster0.wlz7l.mongodb.net/hms?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

//on connection
mongoose.connection.on("connected", () => {
  console.log("connected to database mongodb ");
});
mongoose.connection.on("error", (err) => {
  if (err) {
    console.log("error in database connection: " + err);
  }
});
app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders: "Content-Type,authorization",
    preflightContinue: true,
  })
);
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());

const PORT = process.env.PORT || 9999;

app.listen(9999, () => {
  console.log("Server up at 9999");
});

const DocRoute = require("./routes/doctor");
const PatRoute = require("./routes/patient");
const VerifyDoc = require("./routes/verifyDoc");
const VerifyPat = require("./routes/verifyPat");
const Disease = require("./routes/disease");
const authenticateRoute = require("./routes/authentication");
const settings = require("./routes/settings");

app.use("/api", DocRoute);
app.use("/api", PatRoute);
app.use("/api", VerifyDoc);
app.use("/api", VerifyPat);
app.use("/api", Disease);
app.use("/api", authenticateRoute);
app.use("/api", settings);
