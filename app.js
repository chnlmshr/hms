const express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  app = express();

require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB is up"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 9999, () => {
  console.log("Server is up");
});

app.use("/api", require("./routes/authentication"));
app.use("/api", require("./routes/dashboard"));
app.use("/api", require("./routes/disease"));
app.use("/api", require("./routes/settings"));
