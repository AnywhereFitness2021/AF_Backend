const router = require('express').Router();
const {
    logger
} = require('../middleware');
const Users = require('./users-model');

// get all users
router.get('/', logger, (req, res, next) => {
    res.json("Hello")
});

// get user by userId
router.get('/:userId', logger, (req, res, next) => {

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
