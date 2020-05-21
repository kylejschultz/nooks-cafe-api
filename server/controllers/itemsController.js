const { Item } = require('../models');
require('express-async-errors');

const itemsController = {
  async index(req, res) {
    const items = await Item.find().populate('recipe').sort('asc');
    res.send(items);
  },
  async show(req, res) {
    let exactSearch = req.params.name;
    let regexSearch = new RegExp(`.*\\b${req.params.name}\.*`, 'ig');

    const item = await Item.find({ name: regexSearch })
      .populate('recipe')
      .sort('asc');
    res.send(item);
  },
};

module.exports = itemsController;
