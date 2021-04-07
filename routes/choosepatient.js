const router = require("express").Router();
const jwt = require("jsonwebtoken");

const Patient = require("../models/Patient");
const Reception = require("../models/Reception");


router.get("/choosedoctor", (req, res) => {
    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err || !payload) {
        res.send({ err: "Something went wrong!" });
      } 
      else {
          var list=[]
          var patlist=[]
          
        Reception.find({ consultant: payload._id }).exec((err, reception) => {
          if (!reception) {
            res.send({
              success: false,
            });
          } 
          else
           {
            reception.forEach(element=>{

                Patient.findById(element.patient).exec((err,patient)=>{
                    if(err)
                    res.send({
                        err:true,
                        success:false
                    })
                    else{
                        list.push(patient)
                        res.send({success:true})
                    }
                });
                list.forEach(element=>{
                    
                  patlist.push({_id:element._id,name:element.name,phone:element.phone,age:element.age})
                });
            
                      res.send({
                        success: true,
                        patlist:patlist,
                      });
              
            })
            
                }
              })
              .catch((err) => {
                console.log(err);
                res.send({ success: false});
              });
          }
        });
    });
  module.exports = router;