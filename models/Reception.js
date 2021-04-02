const { Patient } = require("../models/Patient");
const mongoose = require("mongoose");

var ReceptionSchema=mongoose.Schema({
    complications:{
        type:String,
        required:true

    },
    patient:{
        type:mongoose.Types.ObjectId,
        required:true,
    },
    speciality:{
        type:String,
        required: true, 
      },
      date: {
        type: Number,
        default: Math.round(Date.now() / 1000)
      }
})
var Reception=mongoose.model("Reception", ReceptionSchema);
module.exports = Reception,Patient