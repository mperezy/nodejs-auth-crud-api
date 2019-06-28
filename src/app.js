const path = require('path');
const engine = require('ejs-mate');
const express = require('express');
const morgan = require('morgan');

//login
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const app = express();

// database connection
require('./database');
require('./passport/local-auth');

// routes
const routes = require('./routes/index');

// server configuration
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

//enabling the public folder
app.use(express.static(path.join(__dirname, 'public')));

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'mysecretsession',
    resave: false,
    saveUninitialized: false
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    app.locals.signinMessage = req.flash('signinMessage');
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.user = req.user;
    next();
});

// root route
app.use('/', routes);

app.listen(app.get('port'), () => {
   console.log(`Serving on port ${app.get('port')}`);
});