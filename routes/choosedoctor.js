const Reception = require("../models/Reception");
const router = require("express").Router();
const jwt=require("jsonwebtoken");
const Doctor = require("../models/Doctor");
router.get('/choosedoctor',(req,res)=>{
    const token = req.headers.token.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err || !payload) {
        res.send({ err: "Something went wrong!" });
      } 
      else 
      {   
          Reception.findOne({patient:payload._id},(err,patient)=>{
              if(!patient.speciality)
              {
                  res.send({
                      success:true,
                      speciality:false
                  })
              }
              else {
                Doctor.find({speciality:patient.speciality}, null, { sort: { name: 1 } })
                .select(["-password", "-_id","-email","-phone","-date"])
                .then((doctors)=>{
                      if (err)
                      res.send({
                        err: true,
                      });
                      else {
                          console.log(doctors)
                          res.send({
                              success: true,
                              doctors:doctors
                          })
                      }
                   })
                   .catch((err) => {
                    console.log(err);
                    res.send({ success: false });
                  });

              }
            

          })

      }
  });
})
module.exports = router;