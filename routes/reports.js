const Reception = require("../models/Reception");
const Patient = require("../models/Patient");
const Doctor = require("../models/Doctor");
const router = require("express").Router();
const jwt=require("jsonwebtoken");


router.get('/report', (req,res)=>{
    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err || !payload) 
      {
        res.send({ err: "Something went wrong!" });
      } 

        var Repo={}
       
        Reception.findOne({patient:payload._id}).exec((err,reception)=>{
            if(reception)
            {   
                Doctor.findById(reception.consultant).exec((err,doctor)=>{
                    if(doctor)
                    {
                        Repo.consultant=doctor.name;
                        res.send({success:true})
                    }
                    else {
                        res.send({success:false})
                    }
                    
                });
                Patient.findById(payload._id).exec((err,patient)=>{
                    if(patient)
                    {
                    Repo.name=patient.name;
                Repo.blood_group=patient.blood_group;
                Repo.age=patient.age;
                Repo.sex=patient.sex;
                Repo.consultantWord=patient.consultantWord;
                Repo.complications=patient.complications;
                Repo.allergies=patient.allergies;
                Repo.medicines=patient.medicines;
                Repo.dateCreated=patient.dateCreated;
                Repo.lastModified=patient.lastModified;
                res.send({success:true})
                    }
                    else{
                        res.send({success:false})
                    }

                });
                res.send({success:true})
            }
            else {
                res.send({success:false})
            }
            
        });
     
            if (Repo)
            res.send({
                success:true,
                report:Repo
            });
              else 
              {
               res.send({success:false})   
              }
    });
});

module.exports=router;