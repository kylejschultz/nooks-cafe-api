const { Recipe } = require('../models');
require('express-async-errors');

const itemsController = {
  async index(req, res) {
    const items = await Item.find().sort('asc');
    res.send(items);
  },
  async show(req, res) {
    let regexSearch = new RegExp(`.*\\b${req.params.name}\.*`, 'ig');

    const recipe = await Recipe.find({ name: regexSearch }).sort('asc');
    res.send(recipe);
  },
};

module.exports = itemsController;
