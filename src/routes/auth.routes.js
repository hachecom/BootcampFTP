const { Router } = require("express");
const router = Router();
const { logIn, register, logOut, changePassword } = require('../controllers/auth.controller');
const { EmailIsUnique } = require('../middlewares/EmailIsUnique');
const { validateChangePassword, validateLogin, validateRegister } = require('../validators/auth');

router.post('/register', validateRegister, EmailIsUnique, register)

router.post('/login', validateLogin, logIn)

router.get('/logout', logOut)

router.post('/change-password', validateChangePassword, changePassword)

module.exports = router;