const express = require('express');
const router = express.Router();
const passport = require('passport');
const Task = require('../model/task');

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

// auth routes
router.get('/', (req, res, next) => {
    res.render('auth/index', {
        title: 'index'
    });
});

router.get('/signup', (req, res, next) => {
    res.render('auth/signup', {
        title: 'signup'
    });
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.get('/signin', (req, res, next) => {
    res.render('auth/signin', {
        title: 'signin'
    });
});

router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/dashboard',
    failureRedirect: '/signin',
    failureFlash: true
}));

router.get('/profile', isAuthenticated, (req, res, next) => {
    res.render('auth/profile', {
        title: 'profile'
    });
});

router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/signin');
});

// crud routes
router.get('/dashboard', isAuthenticated, async (req, res) => {
    const tasks = await Task.find();
    res.render('index', {
        tasks,
        title: 'dashboard'
    });
});

router.post('/add', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.redirect('/dashboard');
});

router.get('/turn/:id', async (req, res, next) => {
    let { id } = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/dashboard');
});

router.get('/edit/:id', async (req, res, next) => {
    const task = await Task.findById(req.params.id);
    console.log(task);
    res.render('edit', {
        task,
        title: 'edit'
    });
});

router.post('/edit/:id', async (req, res, next) => {
    const { id } = req.params;
    await Task.update({ _id: id }, req.body);
    res.redirect('/dashboard');
});

router.get('/delete/:id', async (req, res, next) => {
    let { id } = req.params;
    await Task.remove({ _id: id });
    res.redirect('/dashboard');
});

module.exports = router;