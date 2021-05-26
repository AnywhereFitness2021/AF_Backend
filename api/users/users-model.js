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
    const { username, password, role, skip } = userToInsert;
    const hash = bcrypt.hashSync(
        password,
        8
    );
    return db('users').insert({ username, password: hash, role, skip }, 'userId').then(([userId]) => getUserById(userId));
}

function patchSkip(userId, changes) {
    return db('users').where('userId', userId).update(changes).then((count) => (count > 0 ? getUserById(userId) : null));
}

module.exports = {
    getUsers,
    getUserById,
    getUserByUsername,
    insertUser,
    patchSkip
}
