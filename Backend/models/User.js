const mongoose = require('mongoose');

const instance = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  firstName: {
    type: String,
    max: 255,
  },
  lastName: {
    type: String,
    max: 255,
  },
  vatNumber: {
    type: String,
  },
  nationality: {
    type: String,
  },
  creationDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  refreshToken: {
    types: String,
  },
});

module.exports = mongoose.model('users', instance);
