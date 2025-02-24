const express = require('express');
const { register, login, myProfile } = require('../controllers/userController');
const auth = require("../middleware/auth").auth;

const router = express.Router();

router.post('/register', register);
router.post('/login', login)
router.get('/my-profile', auth, myProfile)

module.exports = router;
