const mongoose = require('mongoose');

const villagerModel = mongoose.Schema({
  name: String,
  sourceSheet: String,
  iconImage: String,
  houseImage: String,
  species: String,
  gender: String,
  personality: String,
  hobby: String,
  birthday: String,
  catchphrase: String,
  favoriteSong: String,
  colors: [],
  styles: [],
});

module.exports = mongoose.model('Villager', villagerModel);
