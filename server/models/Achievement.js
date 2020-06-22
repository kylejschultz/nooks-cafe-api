const mongoose = require('mongoose');

const achievementModel = mongoose.Schema({
  name: String,
  achievementDescription: String,
  achievementCriteria: String,
  num: Number,
  numOfTiers: Number,
  rewardTier1: Number,
  rewardTier2: Number,
  rewardTier3: Number,
  rewardTier4: Number,
  rewardTier5: Number,
  rewardTier6: Number,
});

module.exports = mongoose.model('Achievement', achievementModel);
