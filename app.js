var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var localStorage=require('local-storage');
var dotenv= require('dotenv');
var flash = require("express-flash");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var upazillaRouter = require('./routes/upazilla');
var pdRouter = require('./routes/pd');
// var adRouter = require('./routes/ad');
var ddRouter = require('./routes/dd');
const redis = require("redis");

let RedisStore = require("connect-redis")(session);
let redisClient = redis.createClient();
dotenv.config({path:'./.env'});
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(session({ store: new RedisStore({ client: redisClient }),secret: 'keyboard cat', resave: true, saveUninitialized: true,  cookie: { maxAge: Date.now() + (30 * 86400 * 1000*10000)  }}))
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next) {
  res.locals.type = req.session.type;
  res.locals.user_id = req.session.user_id;
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/upazilla', upazillaRouter);
app.use('/pd', pdRouter);
// app.use('/ad', adRouter);
app.use('/dd', ddRouter);

const db = require("./models");
db.sequelize.sync()
.catch(err=>console.log(err.message));
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
})
.catch(err=>console.log(err.message))

const port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log(`server running on port ${port}`);
});

module.exports = app;
