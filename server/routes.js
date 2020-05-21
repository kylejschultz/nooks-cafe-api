const express = require('express'),
  path = require('path'),
  rootPath = path.normalize(__dirname + '/../'),
  router = express.Router(),
  recipesController = require('./controllers/recipesController'),
  itemsController = require('./controllers/itemsController');

module.exports = function (app) {
  // Items
  //router.get('/items', itemsController.index);
  router.get('/item/:name', itemsController.show);

  // Recipes
  //router.get('/recipe', recipesController.index);
  router.get('/recipe/:name', recipesController.show);

  app.use('/api', router);
};
