const db = require('../data/db-config');

function getUsers() {
    return db.select('*').from('users');
}

async function getUserById(userId) {
    const searchedUser = await db('users').where('userId', userId).first();
    return searchedUser;
}

module.exports = {
    getUsers,
    getUserById
}
