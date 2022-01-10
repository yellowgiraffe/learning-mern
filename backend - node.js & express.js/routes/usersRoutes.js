const express = require('express');

const usersControllers = require('../controllers/usersController');

const router = express.Router();

router
  .route('/')
  .get(usersControllers.getUsersList);

router
  .route('/signup')
  .post(usersControllers.signup);

router
  .route('/login')
  .post(usersControllers.login);

module.exports = router;
