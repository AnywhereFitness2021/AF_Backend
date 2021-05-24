const db = require('../data/db-config');

function getUsers() {
    return db.select('*').from('users');
}

module.exports = {
    getUsers
}
