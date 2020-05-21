const { Recipe } = require('../models');

module.exports = {
  async index() {
    return await Recipe.all().populate('item');
  },
};
