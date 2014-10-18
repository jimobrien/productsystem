/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Product = require('../api/product/product.model');
var Comment = require('../api/comment/comment.model');

Product.find({}).remove(function() {
  Product.create({
    name : 'Development Tools',
    type : 'Hardware',
    price: 445.12
  }, {
    name : 'Catnip',
    type : 'Food',
    price: 12.10
  }, {
    name : '123123123 Tools',
    type : '111',
    price: 1.12
  }, {
    name : 'Dev41345145151345elopment Tools',
    type : '1345',
    price: 55.10
  }
  );
});

Comment.find({}).remove(function() {
  Comment.create({
    product_id: '5442871776be2c1adb1c6924',
    user: 'Test',
    body: 'some message body'
  })
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});