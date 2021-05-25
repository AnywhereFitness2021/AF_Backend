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

function insertClass(classToInsert) {
    return db('classes').insert(classToInsert, 'classId').then(([classId]) => getClassById(classId));
}

function updateClass(classId, changes) {
    return db('classes').where('classId', classId).update(changes).then((count) => (count > 0 ? getClassById(classId) : null));
}

module.exports = {
    getClasses,
    getClassById,
    removeClassById,
    insertClass,
    updateClass
}
