const express = require('express');
const cors = require('cors');

const router = express.Router();

const {
    registerUser,
    loginUser,
    tokenViews,
    getProfile,
    updateUserName,
    changePassword
} = require('../controllers/authController');

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
)

router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/tokens', tokenViews)
router.post('/profile', getProfile);
router.post('/nameUpdate', updateUserName);
router.post('/changePassword', changePassword);


module.exports = router