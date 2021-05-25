const db = require('../data/db-config');
const bcrypt = require('bcryptjs');

function getUsers() {
    return db.select('userId', 'username', 'role', 'skip').from('users');
}

async function getUserById(userId) {
    const searchedUser = await db.select('userId', 'username', 'role', 'skip').from('users').where('userId', userId).first();
    return searchedUser;
}

async function getUserByUsername(username) {
    const searchedUser = await db('users').where('username', username).first();
    return searchedUser;
}

async function insertUser(userToInsert) {
    const hash = bcrypt.hashSync(
        userToInsert.password,
        8
    );
    return db('users').insert({ username: userToInsert.username, password: hash, role: userToInsert.role, skip: userToInsert.skip }, 'userId').then(([userId]) => getUserById(userId));
}

module.exports = {
    getUsers,
    getUserById,
    getUserByUsername,
    insertUser
}
