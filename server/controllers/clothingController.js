const { Item } = require('../models');
require('express-async-errors');

const clothingController = {
  async all(req, res) {
    const items = await Item.find({
      $or: [
        { sourceSheet: 'Tops' },
        { sourceSheet: 'Bottoms' },
        { sourceSheet: 'Dress-Up' },
        { sourceSheet: 'Headwear' },
        { sourceSheet: 'Accessories' },
        { sourceSheet: 'Socks' },
        { sourceSheet: 'Shoes' },
        { sourceSheet: 'Umbrellas' },
      ],
    }).sort('asc');
    res.send(items);
  },
  async name(req, res) {
    let regexSearch = new RegExp(`.*\\b${req.params.name}\.*`, 'ig');

    const item = await Item.find({
      name: regexSearch,
      $or: [
        { sourceSheet: 'Tops' },
        { sourceSheet: 'Bottoms' },
        { sourceSheet: 'Dress-Up' },
        { sourceSheet: 'Headwear' },
        { sourceSheet: 'Accessories' },
        { sourceSheet: 'Socks' },
        { sourceSheet: 'Shoes' },
        { sourceSheet: 'Umbrellas' },
      ],
    }).sort('asc');
    res.send(item);
  },
};

module.exports = clothingController;
