// depedencies
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import engine from 'react-engine';

// login
import flash from 'connect-flash';
import session from 'express-session';
import passport from 'passport';

// routes
import routes from './routes/index';

// database connection
import './database';
import './passport/local-auth';

const app = express();

// port server configuration
app.set('port', process.env.PORT || 3000);

// setting express react engine views
app.engine('.jsx', engine.server.create());
app.set('views', path.join(__dirname, 'react-app'));
app.set('view engine', 'jsx');
app.set('view', engine.expressView);

// enabling the public folder
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