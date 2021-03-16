//const { Patient } = require("../models/Patient");
const mongoose = require("mongoose");

var ReceptionSchema=mongoose.Schema({
    complications:{
        type:String,
        required:true

    }
})
var Reception=mongoose.model("Reception", ReceptionSchema);
module.exports = {Reception}