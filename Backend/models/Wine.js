const mongoose = require('mongoose');

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
  taste: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  grape: {
    grapeId: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  vineyard: {
    vineyardId: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  foods: {
    type: [
      {
        image: {
          data: Buffer,
          contentType: String,
        },
        name: {
          type: String,
          required: true,
        },
      },
    ],
  },
});

module.exports = mongoose.model('wines', instance);
