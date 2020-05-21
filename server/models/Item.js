const mongoose = require('mongoose');

const itemModel = mongoose.Schema({
  name: {
    type: String,
    required: 'Name is required',
  },
  itemType: String,
  size: String,
  sourceSheet: String,
  tag: String,
  variants: [],
  recipe: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' },
});

module.exports = mongoose.model('Item', itemModel);
