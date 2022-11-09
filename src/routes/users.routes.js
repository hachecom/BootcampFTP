const express = require('express')
const router = express.Router()
const { isAuthenticated } = require('../controllers/auth.controller');
const { findAll, isExist } = require('../controllers/users.controller');
const { update } = require('../controllers/profile.controller');
const { validateProfile } = require('../validators/profile');

router.get('/find/all', isAuthenticated, findAll);

router.put('/:id', isExist, validateProfile, update);

module.exports = router