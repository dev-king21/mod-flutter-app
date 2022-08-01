const bcrypt=require("bcryptjs");
const bodyParser = require("body-parser");
const express=require("express");
const router=express.Router();
// const verify=require("");//token verification
const Patient=require("../Model/patient");
 const { validateRegister,validateLogin }=require("../Validation");
 router.use(bodyParser.json());
 router.use(bodyParser.urlencoded());


// Patient Register API



router.post("/patient/register",async(req,res)=>{
    //validation
      const {error}=await  validateRegister ;

     const salt=await bcrypt.genSalt(10);
      const hashedpassword=await bcrypt.hash(req.body.password,salt)





     console.log(req.body);

     let pt= new Patient.patient();
     pt.firstname=req.body.firstname,
     pt.lastname=req.body.lastname,
     pt.email=req.body.email,
     pt.phonenumber=req.body.phonenumber,
     pt.password=hashedpassword,
     pt.birthdate=req.body.birthdate,
     pt.gender=req.body.gender,
     pt.weight=req.body.weight,
     pt.height=req.body.height,
     pt.bloodtype=req.body.bloodtype,
 
     
     pt.save((err)=>{
        if(err) res.json({"error":err});
        else res.json(pt)
     })


})


router.post("/patient/login",async(req,res)=>{

    const patient=await Patient.patient.findOne({
        email:req.body.email
    })
    if(!patient){
        return res.status(400).send("Incorrect Email or Password,Try again!!")
    }


    const isValidPass=await bcrypt.compare(req.body.password, patient.password);

    if (!isValidPass) {
        return res.status(400).send("Incorrect Email or Password,Try again!!")
    }else console.log("success");
    
})

module.exports=router;
