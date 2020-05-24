const mongoose = require('mongoose');

const reactionModel = mongoose.Schema({
  name: String,
  sourceSheet: String,
  image: String,
  source: [],
});

module.exports = mongoose.model('Reaction', reactionModel);
