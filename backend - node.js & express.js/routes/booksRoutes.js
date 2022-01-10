const express = require('express');

const booksControllers = require('../controllers/booksController');

const router = express.Router();

router
  .route('/')
  .post(booksControllers.addNewBook);

router
  .route('/:bookId')
  .get(booksControllers.getBookById)
  .patch(booksControllers.updateBook)
  .delete(booksControllers.deleteBook);

router
  .route('/user/:userId')
  .get(booksControllers.getBooksByUserId);

module.exports = router;
