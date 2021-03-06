(function() {
  'use strict';

  var app    = io.express(),
      users_farmer_get  = require('../impl/admin/farmer/http_get.js'),
      users_farmer_put  = require('../impl/admin/farmer/http_put.js'),
      users_farmer_post = require('../impl/admin/farmer/http_post.js');

  app.route('/farmer/list')
    .get(users_farmer_get.farmer_list);

  app.route('/farmer/status/:id')
    .put(users_farmer_put.farmer_status);

  app.route('/farmer/inventory/image')
    .post(users_farmer_post.farmer_image);

  app.route('/farmer/inventory')
    .get(io.authorize, users_farmer_get.farmer_inventory_list)
    .post(io.authorize, users_farmer_post.farmer_inventory);

  module.exports = app;
}());
