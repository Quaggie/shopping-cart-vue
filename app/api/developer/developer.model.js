const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: String
});


const Developer = mongoose.model('Developer', schema);

module.exports = Developer;
