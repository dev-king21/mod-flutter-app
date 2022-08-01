const { Server } = require("ws");


Server.post("/student",(req,res)=>{
    console.log(req.body);

    let student= new Student();
    student.name
})