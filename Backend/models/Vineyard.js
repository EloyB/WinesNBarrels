const mongoose = require('mongoose');

const instance = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  videoURL: {
    type: String,
  },
  images: {
    type: [],
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('vineyards', instance);
