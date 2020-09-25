const mongoose = require("mongoose");

const instance = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: { data: Buffer, contentType: String },

  grape: {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  vineyard: {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
  },
});

module.exports = mongoose.model("wines", instance);
