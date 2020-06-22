const { Achievement } = require('../models');
require('express-async-errors');

const achievementsController = {
  async all(req, res) {
    const achievements = await Achievement.find().sort('asc');
    res.send(achievements);
  },
  async name(req, res) {
    let regexSearch = new RegExp(`.*\\b${req.params.name}\.*`, 'ig');

    const achievement = await Achievement.find({ name: regexSearch }).sort(
      'asc',
    );
    res.send(achievement);
  },
};

module.exports = achievementsController;
