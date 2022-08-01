const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const patientRoute = require("./API/auth");
const appointRoute = require("./API/appointment");
const recordRoute = require("./API/medHist");
const medicRoute = require("./API/medication");
const adminRoute = require("./API/adminuse");
require("dotenv/config");

//middleware//
// app.use(cors());
app.use(bodyParser.json());
app.use("/api", patientRoute);
app.use("/appointments", appointRoute);
app.use("/record", recordRoute);
app.use("/medication", medicRoute);
app.use("/admin", adminRoute);

//connection to DB//
const dbURL =
  "mongodb+srv://ASUR:asur@db1.oztivry.mongodb.net/MOD?retryWrites=true&w=majority";
mongoose.connect(
  dbURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB!!");
  }
);

app.listen(3000);
