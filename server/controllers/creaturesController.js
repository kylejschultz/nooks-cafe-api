const { Creature } = require('../models');
require('express-async-errors');

const creaturesController = {
  async all(req, res) {
    const creatures = await Creature.find().sort('asc');
    res.send(creatures);
  },
  async name(req, res) {
    let regexSearch = new RegExp(`.*\\b${req.params.name}\.*`, 'ig');

    console.log(regexSearch);

    const creature = await Creature.find({ name: regexSearch }).sort('asc');
    res.send(creature);
  },
};

module.exports = creaturesController;
