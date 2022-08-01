const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
// const verify=require("");//token verification
const Patient = require("../Model/patient");
const { validateRegister, validateLogin } = require("../Validation");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded());

// Patient Register API

router.post("/patient/register", async (req, res) => {
  //validation
  const { error } = await validateRegister;

  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(req.body.password, salt);

  console.log(req.body);

  const patient = new Patient({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    password: hashedpassword,
    dob: req.body.dob,
    gender: req.body.gender,
    weight: req.body.weight,
    height: req.body.height,
    bloodType: req.body.bloodType,
  });

  patient
    .save()
    .then(() => {
      let token = jwt.sign({ email: req.body.email }, config.key, {});
      res.json({
        token: token,
        patient: patient,
        msg: "success",
      });
    })
    .catch((err) => {
      res.status(403).json({ msg: err });
    });
});

router.post("/patient/login", async (req, res) => {
  const patient = await Patient.patient.findOne({
    email: req.body.email,
  });
  if (!patient) {
    return res.status(403).json({ msg: "Incorrect Email, Try again!!" });
  }

  const isValidPass = await bcrypt.compare(req.body.password, patient.password);

  if (!isValidPass) {
    return res.status(403).json({ msg: "Incorrect Password, Try again!!" });
  } else {
    let token = jwt.sign({ email: req.body.email }, config.key, {});
    res.json({
      token: token,
      msg: "success",
    });
  }
});

module.exports = router;
