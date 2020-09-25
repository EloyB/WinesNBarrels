const mongoose = require("mongoose");
const Wine = require("./Wine");

const instance = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  items: {
    type: [
      {
        wineId: {
          type: Number,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    required: true,
  },
});

module.exports = mongoose.model("orders", instance);
