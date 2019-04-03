const db = require('../database/dbConfig.js');

module.exports = {
    getAllUsers
};

function getAllUsers() {
    return db('users');
}