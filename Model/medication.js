const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MedicationSchema = new Schema({
  patientEmail: {
    type: String,
  },

  name: {
    type: String,
  },

  description: {
    type: String,
  },
});

const medication = mongoose.model("medication", MedicationSchema);

module.exports = { medication };
