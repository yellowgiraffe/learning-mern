const express = require('express');
const { check } = require('express-validator');

const usersControllers = require('../controllers/usersController');

const router = express.Router();

router
  .route('/')
  .get(usersControllers.getUsersList);

router
  .route('/signup')
  .post([
    check('name')
      .not()
      .isEmpty(),
    check('email')
      .normalizeEmail()
      .isEmpty(),
    check('password')
      .isLength({min: 6})
  ], usersControllers.signup);

router
  .route('/login')
  .post(usersControllers.login);

module.exports = router;
