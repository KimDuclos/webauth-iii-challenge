const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("./authModel");

const router = express.Router();

const secret = require("../api/secrets").jwtSecrets;


// POST - register
router.post('/register', (req, res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    if(user.username && user.password && user.department) {
        db.addUser(user)
            .then(user => {
                res.status(201).json(user);
            })
            .catch(err => {
                res.status(500).json({ message: 'Cannot save user.' });
            });
    } else {
        res.status(401).json({ message: 'Username, password and department required.'})
    }
});


// POST - login
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username && password) {
        db.getUserByName({ username })
            .then(user => {
                if (bcrypt.compareSync(password, user.password)) {
                    const token = generateToken(user);

                    res.status(200).json({ message: 'logged in', token });
                } else {
                    res.status(401).json({ message: 'Invalid username or password.'})
                }
            })
            .catch(err => {
                res.status(500).json({ message: 'Definitely some beef with loggin in.'});
            });
    } else {
        res.status(401).json({ message: 'Username and password required.'})
    }
});

// token 
function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        roles: user.department
    };
    const options = {
        expiresIn: '1d'
    };
    return jwt.sign(payload, secret, options);
}

module.exports = router;
