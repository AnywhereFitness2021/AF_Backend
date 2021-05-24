const db = require('../data/db-config');

function getClasses() {
    return db.select('*').from('classes');
}

module.exports = {
    getClasses
}
