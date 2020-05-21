const mongoose = require('mongoose');

const recipeModel = mongoose.Schema({
  sourceSheet: String,
  name: String,
  source: [{ type: String }],
  sourceNotes: String,
  version: String,
  category: String,
  internalId: Number,
  uniqueEntryId: String,
  materials: [{}],
});

module.exports = mongoose.model('Recipe', recipeModel);
