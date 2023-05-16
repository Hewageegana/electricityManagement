const mongoose = require("mongoose");

const ElectricitySchema = new mongoose.Schema({
  ElectricityId: {
    type: String,
    required: true,
  },
  ElectricityType: {
    type: String,
    required: true,
  },
  Price: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  Image: {
    type: String,
    required: true,
  },
});

const electricityy = mongoose.model("Electricity", ElectricitySchema);
module.exports = electricityy;
