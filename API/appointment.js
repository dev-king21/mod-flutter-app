//API to add appointments to db and retrieve them


const { decodeBase64 } = require("bcryptjs");
const express=require("express");
const router=express.Router();
const appointments=require("../Model/patient")
const patient=require("../Model/patient")


//api to post appointments
router.post("/:email",async(req,res)=>{

    router.put("/:id",async(req,res)=>{
        const result=await appointments.patient.updateOne({
            _id:req.params.id
        },{
            $set:{
                appName:req.body.appName,
               appdate:req.body.appdate,
               apptime:req.body.apptime,
               applocation:req.body.applocation
            }
        })
        res.json(result);
        
    })

})

//api to get appointments by user

//api to delete appointments by user

//api to patch appointments by user




module.exports=router;