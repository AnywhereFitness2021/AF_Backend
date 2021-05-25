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

const classSchema = yup.object({
    name: yup.string()
        .trim()
        .required('a name for the class is required')
        .max(200, 'name cannot be more than 200 chars'),
    type: yup.string()
        .trim()
        .max(200, 'type cannot be more than 200 chars'),
    startTime: yup.string()
        .trim()
        .max(200, 'startTime cannot be more than 200 chars'),
    duration: yup.string()
        .trim()
        .max(200, 'startTime cannot be more than 200 chars'),
    intensityLevel: yup.string()
        .trim()
        .max(200, 'intensityLevel cannot be more than 200 chars'),
    location: yup.string()
        .trim()
        .max(200, 'location cannot be more than 200 chars'),
    attendees: yup.number()
        .min(0, 'attendees cannot be less than 0')
        .max(100, 'attendees cannot be more than 100'),
    maxClassSize: yup.number()
        .min(0, 'maxClassSize cannot be less than 0')
        .max(100, 'maxClassSize cannot be more than 100')
});

async function validateClass(req, res, next) {
    try {
        const validatedBody = await classSchema.validate(req.body, {
            stripUnknown: true
        });
        req.body = validatedBody;
        next();
    } catch (err) {
        next({ status: 400, message: err.message });
    }
}

module.exports = {
    logger,
    validateUserId,
    validateClassId,
    validateClass
}
