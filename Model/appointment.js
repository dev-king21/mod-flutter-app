const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  patientEmail: {
    type: String,
  },

  date: {
    type: new Date(),
  },

  time: {
    type: String,
  },
  location: {
    type: String,
  },
});

const appointment = mongoose.model("appointment", AppointmentSchema);

module.exports = { appointment };
