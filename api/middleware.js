const yup = require('yup');
const Users = require('./users/users-model');
const Classes = require('./classes/classes-model');

function logger(req, res, next) {
    console.log(`
        ${new Date()}

        ${req.method} request to "${req.baseUrl}" endpoint

        req.body:   ${JSON.stringify(req.body)}
        req.params.userId:   ${req.params.userId}
        req.params.classId:   ${req.params.classId}
    `);
    next();
}

async function validateUserId(req, res, next) {
    try {
        const searchedUser = await Users.getUserById(req.params.userId);
        if (!searchedUser) {
            next({ status: 404, message: `User with ID ${req.params.userId} not found!` });
        } else {
            req.existingUser = searchedUser;
            next();
        }
    } catch (err) {
        next(err);
    }    
}

async function validateClassId(req, res, next) {
    try {
        const searchedClass = await Classes.getClassById(req.params.classId);
        if (!searchedClass) {
            next({ status: 404, message: `Class with ID ${req.params.classId} not found!` });
        } else {
            req.existingClass = searchedClass;
            next();
        }
    } catch (err) {
        next(err);
    }    
}

module.exports = {
    logger,
    validateUserId,
    validateClassId
}
