const express = require('express');
const { register, login, refreshToken } = require('../controllers/authController');
const router = express.Router();

// Define the endpoints
router.post('/register', register);
router.post('/login', login);
router.post('/refresh-token', refreshToken);

module.exports = router;