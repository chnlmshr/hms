const Reception = require("../models/Reception");
const Patient = require("../models/Patient");
const router = require("express").Router();
const jwt=require("jsonwebtoken");


router.get('/report', (req,res)=>{
    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err || !payload) 
      {
        res.send({ err: "Something went wrong!" });
      } 

        var Repo={Reception,Patient}
        Repo.findOne({patient: patient._id})
        .select["-password","-email","-_id","- address","-patient"]
        .exec((err, repo) => {
            if (err)
              res.send({
                err: true,
                success:false
              });
              else 
              {
                  res.send({
                      success:true,
                      report:repo
                  });
              }
    });
});
});
module.exports=router;