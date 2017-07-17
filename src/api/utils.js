var $ = require('jquery');

export const getImagesPhoto = (callback) => {
  $.get(`/images/photos`, images => {
    callback(images);
  });
}