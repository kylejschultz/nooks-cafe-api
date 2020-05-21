const express = require('express'),
  path = require('path'),
  rootPath = path.normalize(__dirname + '/../'),
  router = express.Router(),
  itemsController = require('./controllers/itemsController');

module.exports = function (app) {
  router.get('/items', itemsController.index);
  router.get('/items/:name', itemsController.show);

  app.use('/', router);
};
