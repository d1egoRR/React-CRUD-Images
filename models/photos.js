"use strict"
var mongoose = require('mongoose');

var photosSchema = mongoose.Schema({
  img: String,
  caption: String
});

var Photos = mongoose.model('Photos', photosSchema);

module.exports = Photos;