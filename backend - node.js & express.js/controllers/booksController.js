const uuid = require('uuid');
const { validationResult } = require('express-validator');

const HttpError = require('../models/httpError');
const Book = require('../models/book');

exports.getBookById = async (req, res) => {
  const bookId = req.params.bookId;
  let book;

  try {
    book = await Book.findById(bookId);
  } catch (err) {
    const error = new HttpError('Something went wrong on the server side. Please try again', 500);
    return next(error);
  }

  if (!book) {
    const error = new HttpError('COULD NOT FIND A BOOK WITH THIS ID', 404);
    return next(error);
  }

  res.json({ FOUND: book.toObject({ getters: true }) });
};

exports.getBooksByUserId = async (req, res, next) => {
  const userId = req.params.userId;
  let books;

  try {
    books = await Book.find({ userId });
  } catch (err) {
    const error = new HttpError('Something went wrong on the server side. Please try again', 500);
    return next(error);
  }

  if (books.length === 0) {
    const error = new HttpError('COULD NOT FIND BOOKS FOR THIS USER', 404);
    return next(error);
  }
  res.json({ FOUND: books.map((book) => book.toObject({ getters: true })) });
};

exports.addNewBook = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError('Invalid inputs passed. Please try again.', 422)
  }

  const { title, author, description, userId } = req.body;
  const newBook = new Book({
    title,
    author,
    description,
    image: 'https://aliabdaal.com/content/images/size/w600/2021/02/Atomic-Habits.jpg',
    userId,
  });

  try {
    await newBook.save();
  } catch (err) {
    const error = new HttpError('Saving new book failed. Please try again.', 500);
    return next(error);
  }

  res.status(201).json({ newBook });
};

exports.updateBook = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new HttpError('Invalid inputs passed. Please try again.', 422)
  }

  const { bookId }  = req.params;

  let book;

  try {
    book = await Book.findById(bookId);
  } catch (err) {
    const error = new HttpError('Something went wrong on the server side. Please try again', 500);
    return next(error);
  }

  const { title, author, description } = req.body;

  book.title = title;
  book.author = author;
  book.description = description;


  try {
    await book.save()
  } catch(err) {
    const error = new HttpError('Update failed. Please try again.', 500);
    return next(error);
  }

  res.json({ UPDATED: book.toObject({ getters: true}) });
};

exports.deleteBook = async (req, res, next) => {
  const { bookId } = req.params;
  let book;

  try {
    book = await Book.findById(bookId);
  } catch (err) {
    const error = new HttpError('Something went wrong on the server side. Make sure if the books with this id exists and try again', 500);
    return next(error);
  }

  try {
    await book.remove();
  } catch (err) {
    const error = new HttpError('Something went wrong on the server side. Please try again', 500);
    return next(error);
  }

  res.json({ message: 'The book summary is removed'});
};
