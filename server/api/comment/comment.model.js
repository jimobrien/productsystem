'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
  name: String,
  body: String,
  product_id: String
});

module.exports = mongoose.model('Comment', CommentSchema);