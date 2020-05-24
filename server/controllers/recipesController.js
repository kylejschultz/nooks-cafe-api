const { Recipe } = require('../models');
require('express-async-errors');

const itemsController = {
  async all(req, res) {
    const items = await Recipe.find().sort('asc');
    res.send(items);
  },
  async name(req, res) {
    let regexSearch = new RegExp(`.*\\b${req.params.name}\.*`, 'ig');

    const recipe = await Recipe.find({ name: regexSearch }).sort('asc');
    res.send(recipe);
  },
};

module.exports = itemsController;
