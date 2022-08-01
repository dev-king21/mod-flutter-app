const express=require("express");
const bodyParser = require("body-parser");
const router=express.Router();
const records=require("../Model/patient") 
router.use(bodyParser.json());
router.use(bodyParser.urlencoded());

// api to add medical history

router.put("/:id",async(req,res)=>{
    const result=await records.patient.updateOne({
        _id:req.params.id
    },{
        $set:{
            recname:req.body.recname,
           recdate:req.body.recdate
        }
    })
    res.json(result);
    
})

//api to get medical history
//api to remove medical history
//api to patch medical history
module.exports=router;
