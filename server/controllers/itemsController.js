const { Item, Recipe } = require('../models');

require('express-async-errors');

const itemsController = {
  async all(req, res) {
    const items = await Item.find().populate('recipe').sort('asc');
    res.send(items);
  },
  async name(req, res) {
    let regexSearch = new RegExp(`.*\\b${req.params.name}\.*`, 'ig');

    const item = await Item.find({ name: regexSearch })
      .populate('recipe')
      .sort('asc');
    res.send(item);
  },
};

module.exports = itemsController;
