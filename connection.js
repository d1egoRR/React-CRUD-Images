var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/personalwebsite');

var db = mongoose.connection;
db.on('error', console.error.bind(console, '# MongoDB connection error'));
db.on('connected', function() {
  console.log("conexion!!");
});