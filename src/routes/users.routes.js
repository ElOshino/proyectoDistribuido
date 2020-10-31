const { Router } = require('express');
const router = Router();


const { renderSignUpForm, renderSigninForm, signIn, signUp, Loguot } = require('../controllers/users.controller');

router.get('/users/signup', renderSignUpForm);

router.post('/users/signup', signUp);

router.get('/users/signin', renderSigninForm);

router.post('/users/signin', signIn);

router.get('/users/loguot', Loguot);

module.exports = router;


