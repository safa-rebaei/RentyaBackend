var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const http = require("http");
const cors = require("cors");   // <-- AJOUT ICI
require('dotenv').config();

const { connectToMongoDb } = require("./config/db");

// routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/userRouter');
var osRouter  = require('./routes/osRouter');

var app = express();

// activer CORS
app.use(cors()); 
// si tu veux limiter à ton front uniquement :
// app.use(cors({ origin: "http://localhost:3001" }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// tes routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/osRouter', osRouter);

// catch 404
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json('error');
});

const port = process.env.PORT || 5001;

// connexion Mongo
connectToMongoDb();

// démarrage serveur
app.listen(port, () => console.log(` Server running on port ${port}`));
