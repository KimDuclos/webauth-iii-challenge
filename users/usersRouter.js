const express = require("express");
const jwt = require("jsonwebtoken");
const secrets = require("../api/secrets");

const db = require("./usersModel");

const router = express.Router();

// GET
router.get('/', restricted, (req, res, next) => {
    db.getAllUsers()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({ message: 'Cannot retrieve users.' })
        });
});

function restricted(req, res, next) {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secrets.jwSecrets, err => {
            if (!err) {
                next();
            } else {
                res.status(401).json({ message: 'Invalid token.'});
            }
        });
    } else {
        res.status(401).json({ message: 'Invalid credentials.'})
    }
}

module.exports = router;