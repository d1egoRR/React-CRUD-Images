var $ = require('jquery');

export const getPhotos = (callback) => {
  $.get(`/photos`, photos => {
    callback(photos);
  });
}

export const savePhoto = (photo, callback) => {
  $.post(`/photos`, photo, photos => {
    callback(photos);
  });
}

/*
var mongoose = require('mongoose');
var Photos = require('../models/photos.js');

mongoose.connect('mongodb://localhost:27017/personalwebsite');
var db = mongoose.connection;
db.on('error', console.error.bind(console, '# MongoDB connection error'));
db.on('connected', function() {
  console.log("conexion!!");
});

export const savePhoto = photo => {
  Photos.create(photo, function(err, photos) {
    if (err) {
      throw err;
    }
    console.log(photos);
  });
}

export const getPhotos = () => {
  Photos.find(function(err, photos) {
    if (err) {
      throw err;
    }
    console.log(photos);
  });
}
*/