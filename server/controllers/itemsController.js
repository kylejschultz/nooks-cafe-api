const { Item } = require('../models');
require('express-async-errors');

const itemsController = {
  async index(req, res) {
    const items = await Item.find().populate('recipe').sort('asc');
    res.send(items);
  },
  async show(req, res) {
    let search = req.params.name;
    let regexSearch = new RegExp(req.params.name);
    const item = await Item.find({ name: search })
      .populate('recipe')
      .sort('asc');
    res.send(item);
  },
};

module.exports = itemsController;
