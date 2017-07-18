var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//var index = require('./routes/index');
//var users = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/website');

/*var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('ok!!!');
});*/

var Photos = require('./models/photos.js');

app.get('/photos', function(req, res) {
  Photos.find(function(err, photos) {
    if (err) {
      throw err;
    }
    res.json(photos);
  });
});

app.post('/photos', function(req, res) {
  var photo = req.body;

  Photos.create(photo, function(err, photos) {
    if (err) {
      throw err;
    }
    res.json(photos);
  });
});

app.get('/images/photos', function(req, res) {
  const imgFolder = __dirname + '/public/images/photos';
  const fs = require('fs');
  fs.readdir(imgFolder, function(err, files) {
    if (err) {
      return console.error(err);
    }

    const filesArr = [];
    files.forEach(function(file) {
      filesArr.push({name: file});
    });

    res.json(filesArr);
  });
});

app.delete('/photos/:_id', function(req, res) {
  var query = {_id: req.params._id};
  Photos.remove(query, function(err, photos) {
    if (err) {
      console.log('# API DELETE PHOTOS' + err);
    }

    res.json(photos);
  });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//app.use('/', index);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;