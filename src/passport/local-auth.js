const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../model/user');

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
    console.log(`The user registered is: ${user}`);

    if(user) {
        return done(null, false, req.flash('signupMessage', 'The Email is already taken!!'));
    }
    else {
        const newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);

        console.log(`New User: ${newUser}`);

        await newUser.save();
        done(null, newUser);
    }
}));

passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const user = await User.findOne({ email: email });

    if(!user) {
        return done(null, false, req.flash('signinMessage', 'No user found!!'));
    }
    if(!user.comparePassword(password)) {
        return done(null, false, req.flash('signinMessage', 'Incorrect password!!'));
    }
    return done(null, user);
}));