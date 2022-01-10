const express = require('express');

const booksControllers = require('../controllers/booksController');

const router = express.Router();

router
  .route('/:bookId')
  .get(booksControllers.getBookById);

router
  .route('/user/:userId')
  .get(booksControllers.getBooksByUserId);

module.exports = router;
