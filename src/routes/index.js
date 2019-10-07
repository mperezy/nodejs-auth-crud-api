import express from 'express';
import passport from 'passport';
import Task from '../model/task';

const router = express.Router();

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

// auth routes
router.get('/', (req, res, next) => {
    res.render('', {
        title: 'index',
        user: req.user
    });
});

router.get('/signup', (req, res, next) => {
    res.render('components/auth/signup', {
        title: 'signup'
    });
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.get('/signin', (req, res, next) => {
    res.render('components/auth/signin', {
        title: 'signin'
    });
});

router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/dashboard',
    failureRedirect: '/signin',
    failureFlash: true
}));

router.get('/profile', isAuthenticated, (req, res, next) => {
    res.render('components/auth/profile', {
        title: 'profile',
        user: req.user
    });
});

router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/signin');
});

// crud routes
router.get('/dashboard', isAuthenticated, async (req, res) => {
    const tasks = await Task.find({ 'userId': req.user._id });

    res.render('components/dashboard', {
        tasks: tasks,
        title: 'dashboard',
        user: req.user
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
    const task = await Task.findById(id);
    task.title = req.body.titleModal;
    task.description = req.body.descriptionModal;
    await task.save();
    res.redirect('/dashboard');
});

router.get('/delete/:id', async (req, res, next) => {
    let { id } = req.params;
    await Task.remove({ _id: id });
    res.redirect('/dashboard');
});

module.exports = router;