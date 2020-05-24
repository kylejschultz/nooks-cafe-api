const { Reaction } = require('../models');
require('express-async-errors');

const reactionsController = {
  async all(req, res) {
    const reactions = await Reaction.find().sort('asc');
    res.send(reactions);
  },
  async name(req, res) {
    let regexSearch = new RegExp(`.*\\b${req.params.name}\.*`, 'ig');

    console.log(regexSearch);

    const reaction = await Reaction.find({ name: regexSearch }).sort('asc');
    res.send(reaction);
  },
};

module.exports = reactionsController;
