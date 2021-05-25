const router = require('express').Router();
const {
    logger, validateClassId
} = require('../middleware');
const Classes = require('./classes-model');

// get all classes
router.get('/', logger, async (req, res, next) => {
    try {
        const classes = await Classes.getClasses();
        res.json(classes);
    } catch (err) {
        next(err);
    }
});

// get class by classId
router.get('/:classId', logger, validateClassId, async (req, res, next) => {
    try {
        const searchedClass = await Classes.getClassById(req.params.classId);
        res.json(searchedClass);
    } catch (err) {
        next(err);
    }
});

// update class by classId
router.put('/:classId', logger, (req, res, next) => {

});

// create new class
router.post('/', logger, (req, res, next) => {

});

// delete existing class by classId
router.delete('/:classId', logger, validateClassId, async (req, res, next) => {
    try {
        const deletedClass = await Classes.removeClassById(req.params.classId);
        res.json(deletedClass);
    } catch (err) {
        next(err);
    }
});

// catch-all error handler
router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        note: 'An error occurred in the classes router!',
        message: err.message,
        stack: err.stack
    });
});

module.exports = router;
