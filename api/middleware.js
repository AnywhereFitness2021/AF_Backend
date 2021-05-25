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

module.exports = {
    logger
}
