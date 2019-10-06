import passport from 'passport';
const LocalStrategy = require('passport-local').Strategy;

import User from '../model/user';

passport.serializeUser((user, done) => {
   done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const user = await User.findOne({ 'email': email });
    console.log(`The user who is trying to register, ${ user == null ? "doesn't exists" : 'exists!!' }`);

    if(user) {
        return done(null, false, req.flash('signupMessage', 'The Email is already taken!!'));
    }
    else if(password === req.param('passwordconfirm').toString()){
        const newUser = new User();
        newUser.firstname = req.param('firstname');
        newUser.lastname = req.param('lastname');
        newUser.role = req.param('role');
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);

        console.log(`New User: ${newUser}`);

        await newUser.save();
        done(null, newUser, req.flash('signupMessage', "Your user was successfully created!!"));
    }
    else {
        return done(null, false, req.flash('signupMessage', "The password doesn't match!!"));
    }
}));

passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const user = await User.findOne({ 'email': email });

    if(!user) {
        return done(null, false, req.flash('signinMessage', 'No user found!!'));
    }
    if(!user.comparePassword(password)) {
        return done(null, false, req.flash('signinMessage', 'Incorrect password!!'));
    }
    return done(null, user, req.flash('signinMessage', "You logged in successfully!!"));
}));