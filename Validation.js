
const Joi=require("@hapi/joi");

const validateRegister=async(data)=>{
    const schema= Joi.object({
        firstname:Joi.string().min(1).max(100),
        lastname:Joi.string().min(1).max(100),
        email:Joi.string().min(4).max(500).email(),
        phonenumber:Joi.string().regex(/^[0-9]{10}$/).messages({'string.pattern.base':'Phone Number Must have 10 digits '}).required(),
        password:Joi.string().min(4).max(10),
        DOB:Joi.string().min(4).max(20),
        gender:Joi.string().min(4).max(6),
        weight:Joi.string().min(2).max(3),
        height:Joi.string().min().max(3),
        bloodtype:Joi.string().min(2).max(3)
    })

    return schema.validate(data);
}

const validateLogin=(data)=>{
    const loginSchema=Joi.object({
        email:Joi.string().min(4).max(500).email(),
        password:Joi.string().min(5).max(50)

    })
    return loginSchema.validate(data);
}


module.exports.validateRegister=validateRegister;
module.exports.validateLogin=validateLogin;