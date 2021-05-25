const router = require('express').Router();
const {
    logger, validateUserId
} = require('../middleware');
const Users = require('./users-model');

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

// register a new user
router.post('/register', logger, (req, res, next) => {

});

// login with existing user
router.post('/login', logger, (req, res, next) => {

});

// catch-all error handler
router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        note: 'An error occurred in the users router!',
        message: err.message,
        stack: err.stack
    });
});

module.exports = router;
