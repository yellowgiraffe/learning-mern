const express = require('express');

const { check } = require('express-validator');

const booksControllers = require('../controllers/booksController');

const router = express.Router();

router
  .route('/')
  .post([
    check('title')
      .not()
      .isEmpty(),
    check('author')
    .not()
    .isEmpty(),
    check('description')
    .not()
    .isEmpty()
    .isLength({min: 5})
  ],
  booksControllers.addNewBook);

router
  .route('/:bookId')
  .get(booksControllers.getBookById)
  .patch([
    check('title')
      .not()
      .isEmpty(),
    check('author')
      .not()
      .isEmpty(),
    check('description')
      .not()
      .isEmpty()
      .isLength({min: 5})
  ],
  booksControllers.updateBook)
  .delete(booksControllers.deleteBook);

router
  .route('/user/:userId')
  .get(booksControllers.getBooksByUserId);

module.exports = router;
