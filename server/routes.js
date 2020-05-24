const express = require('express'),
  path = require('path'),
  rootPath = path.normalize(__dirname + '/../'),
  router = express.Router(),
  {
    recipesController,
    itemsController,
    villagersController,
    reactionsController,
    creaturesController,
  } = require('./controllers');
test = require('./test');

module.exports = function (app) {
  // Items
  //router.get('/items', itemsController.all);
  router.get('/item/:name', itemsController.name);

  // Recipes
  //router.get('/recipe', recipesController.all);
  router.get('/recipe/:name', recipesController.name);

  //Villagers
  router.get('/villager', villagersController.all);
  router.get('/villager/:name', villagersController.name);

  //Reactions
  router.get('/reaction', reactionsController.all);
  router.get('/reaction/:name', reactionsController.name);

  //Creatures
  router.get('/creature', creaturesController.all);
  router.get('/creature/:name', creaturesController.name);

  // Test command
  router.get('/test', test.execute);

  app.use('/', router);
};
