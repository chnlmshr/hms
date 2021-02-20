const mongoose = require('mongoose');

const DoctorSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        index:{
            unique:true,
        },
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password:{
        type : String,
        required : true
    },
    phone:{
        type:String,
        required:true
    },
    degree:{
        type:String,
        required:true,

    },


});
const Doctor=module.exports = mongoose.model('Doctors',DoctorSchema);