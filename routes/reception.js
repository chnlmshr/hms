const Reception = require("../models/Reception");
const router = require("express").Router();
const jwt=require("jsonwebtoken");

router.post("/reception",(req,res)=>{
    const token = req.body.token.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err || !payload) {
        res.send({ err: "Something went wrong!" });
      } 
      else 
      {
    var complications=req.body.complications
    var department=req.body.department
    Reception.create(
        
        {
            complications:complications,
            speciality:department,
            patient:payload._id,
        }
      )
        .then((reception) => {
          res.send({ success: true });
        })
        .catch((err) => {
          console.log(err);
          res.send({ success: false });
        });
      }
  });

});
module.exports=router;