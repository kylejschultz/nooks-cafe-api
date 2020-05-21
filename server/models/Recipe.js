const mongoose = require('mongoose');

const recipeModel = mongoose.Schema({
  name: String,
  category: String,
  sourceSheet: String,
  materials: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'Item',
  },
});

module.exports = mongoose.model('Recipe', recipeModel);
