const mongoose = require('mongoose');

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
  orderDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model('orders', instance);
