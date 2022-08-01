const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MedicalHistorySchema = new Schema({
  mhName: {
    type: String,
  },

  patientEmail: {
    type: String,
  },

  date: {
    type: String,
  },
});

const medicalHistory = mongoose.model("medicalHistory", MedicalHistorySchema);

module.exports = { medicalHistory };
