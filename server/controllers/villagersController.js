const { Villager } = require('../models');
require('express-async-errors');

const villagersController = {
  async all(req, res) {
    const villagers = await Villager.find().sort('asc');
    res.send(villagers);
  },
  async name(req, res) {
    let regexSearch = new RegExp(`.*\\b${req.params.name}\.*`, 'ig');

    console.log(regexSearch);

    const villager = await Villager.find({ name: regexSearch }).sort('asc');
    res.send(villager);
  },
};

module.exports = villagersController;
