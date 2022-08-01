const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Patient = new Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  phoneNumber: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  dob: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  bloodType: {
    type: String,
    required: true,
  },

  // appointment: {
  //   type: String,
  // },

  // medicalHistory: {
  //   type: Array,
  // },

  // medication: {
  //   type: Array,
  // },
});

const patient = mongoose.model("Patient", Patient);

module.exports = { patient };
