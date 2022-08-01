const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const patient = require("../Model/patient");
const { post } = require("./auth");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded());

// get patient list
router.get("/patients", async (req, res) => {
  const result = await patient.patient.find();
  res.json(result);
});

//

module.exports = router;
