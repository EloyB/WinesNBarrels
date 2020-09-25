const mongoose = require('mongoose');

const instance = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model('foods', instance);
