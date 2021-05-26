const router = require('express').Router();
const {
    logger,
    validateUserId,
    validateUser,
    validatePatchSkip,
    checkUniqueUsername,
    checkExistingUsername,
    validateLoginBody
} = require('../middleware');
const Users = require('./users-model');
const bcrypt = require('bcryptjs');
const tokenBuilder = require('../secrets/index');

// get all users
router.get('/', logger, async (req, res, next) => {
    try {
        const users = await Users.getUsers();
        res.json(users);
    } catch (err) {
        next(err);
    }
});

// get user by userId
router.get('/:userId', logger, validateUserId, async (req, res, next) => {
    try {
        const searchedUser = await Users.getUserById(req.params.userId);
        res.json(searchedUser);
    } catch (err) {
        next(err);
    }
});

// patch user "skip" by userId
router.patch('/:userId', logger, validatePatchSkip, validateUserId, async (req, res, next) => {
    try {
        const updatedUser = await Users.patchSkip(req.params.userId, req.body);
        res.status(201).json(updatedUser);
    } catch (err) {
        next(err);
    }
});

// register a new user
router.post('/register', logger, validateUser, checkUniqueUsername, async (req, res, next) => {
    try {
        const newUser = await Users.insertUser(req.body);
        res.status(201).json({
            userId: newUser.userId,
            username: newUser.username,
            role: newUser.role,
            skip: newUser.skip
        });
    } catch (err) {
        next(err);
    }
});

// login with existing user
router.post('/login', logger, validateLoginBody, checkExistingUsername, async (req, res, next) => {
    const { username, password } = req.body;
    const dbUser = await Users.getUserByUsername(username);
    try {
        if (bcrypt.compareSync(password, dbUser.password)) {
            const token = tokenBuilder(dbUser);
            res.json({
                token: token,
                welcomeMessage: `Welcome to Anywhere Fitness, ${username}!`,
                role: dbUser.role
            });
        } else {
            next({ status: 401, message: 'invalid credentials' });
        }
    } catch (err) {
        next({ status: 401, message: 'invalid credentials' });
    }
});

// catch-all error handler
router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        note: 'An error occurred in the users router!',
        message: err.message,
        stack: err.stack
    });
});

module.exports = router;
