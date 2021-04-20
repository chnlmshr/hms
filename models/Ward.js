const mongoose = require("mongoose");

var WardSchema = mongoose.Schema({
  specilaity: {
    type: String,
    required: true
  },
  max_capacity: {
    type: Number,
    required: true,
  },
  total_occupied:
  {
    type:Number,
    required:true
  }
});

var Ward = mongoose.model("Ward", WardSchema);


module.exports = Ward;
