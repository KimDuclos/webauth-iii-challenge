const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = require('../api/secrets').jwtSecret; 
const Users = require('../users/users-model.js');
