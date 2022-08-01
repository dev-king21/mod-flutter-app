const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT || 3005;

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
// const dbURL =
//     "mongodb+srv://ASUR:asur@db1.oztivry.mongodb.net/MOD?retryWrites=true&w=majority";
const dbURL = "mongodb://127.0.0.1:27017/mod_app";
mongoose.connect(
  dbURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB!!");
  }
);

// app.route("/").get((req, res) => res.json("Hello World!"));
// app.listen(port, () => console.log(`Your server is running on port ${port}`));

// Added 0.0.0.0 to run server from local ip address
app.listen(port, "0.0.0.0", () =>
  console.log(`Your server is running on port ${port}`)
);
