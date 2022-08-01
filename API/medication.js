const express=require("express");
const router=express.Router();
const bodyParser = require("body-parser");
const medication=require("../Model/patient")
router.use(bodyParser.json());
router.use(bodyParser.urlencoded());

// api to register medication
router.put("/:id",async(req,res)=>{
    const result=await medication.patient.updateOne({
        _id:req.params.id
    },{
        $set:{
            medname:req.body.medname,
           meddescription:req.body.meddescription
        }
    })
    res.json(result);
    
})

//api to get all medication /user




//api to remove medication by user

//api to patch medication by user


module.exports=router;
