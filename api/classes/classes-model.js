const db = require('../data/db-config');

function getClasses() {
    return db.select('*').from('classes');
}

async function getClassById(classId) {
    const searchedClass = await db('classes').where('classId', classId).first();
    return searchedClass;
}

module.exports = {
    getClasses,
    getClassById
}
