const db = require('../data/db-config');

function getClasses() {
    return db.select('*').from('classes');
}

async function getClassById(classId) {
    const searchedClass = await db('classes').where('classId', classId).first();
    return searchedClass;
}

async function removeClassById(classId) {
    const searchedClass = await db('classes').where('classId', classId).first();
    await db('classes').where('classId', classId).del();
    return searchedClass;
}

module.exports = {
    getClasses,
    getClassById,
    removeClassById
}
