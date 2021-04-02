const mongoose = require("mongoose");

var ReceptionSchema = mongoose.Schema({
  complications: {
    type: String,
    required: true,
  },
  patient: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  speciality: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Reception", ReceptionSchema);
