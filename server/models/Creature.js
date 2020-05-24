const mongoose = require('mongoose');

const creatureModel = mongoose.Schema({
  name: String,
  sourceSheet: String,
  num: Number,
  iconImage: String,
  critterpediaImage: String,
  furnitureImage: String,
  sell: String,
  whereHow: String,
  shadow: String,
  totalCatchesToUnlock: Number,
  rainSnowCatchUp: Boolean,
  size: String,
  lightingType: String,
  colors: [],
  specialSell: Number,
  activeMonths: {
    northern: [],
    southern: [],
  },
});

module.exports = mongoose.model('Creature', creatureModel);
