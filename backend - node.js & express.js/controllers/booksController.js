const uuid = require('uuid');

const HttpError = require('../models/httpError');

let BOOKS = [
  {
    id: 'book1',
    image: 'https://aliabdaal.com/content/images/size/w600/2021/02/Atomic-Habits.jpg',
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'This book helped me understand how habits are formed and whatwe can do to build long-lasting chains of cues, cravings, responses, and rewards to create systems that will help us achieve our goals.',
    userId: 'user1',

  },
  {
    id: 'book2',
    image: 'https://aliabdaal.com/content/images/size/w600/2021/02/Your-Money-or-Your-Life.jpg',
    title: 'Your Money or Your Life',
    author: 'Vicki Robin',
    description: 'This book completely changed my relationship with money. I think everyone should give it a read. Even though it’s portrayed as a personal finance book, it gives answers to much deeper questions than just “How do I save more?”',
    userId: 'user2',
  }
];

exports.getBookById = (req, res) => {
  const bookId = req.params.bookId;
  const book = BOOKS.find((book) => book.id === bookId);
  if (!book) {
    const error = new HttpError('COULD NOT FIND A BOOK WITH THIS ID', 404);
    throw error;
  }
  res.json({FOUND: book});
};

exports.getBooksByUserId = (req, res, next) => {
  const userId = req.params.userId;
  const books = BOOKS.filter((book) => book.userId === userId);
  if (books.length === 0) {
    const error = new HttpError('COULD NOT FIND BOOKS FOR THIS USER', 404);
    return next(error);
  }
  res.json({FOUND: books})
};

exports.addNewBook = (req, res) => {
  const { title, author, description, userId } = req.body;
  const newBook = {
    id: uuid(),
    title,
    author,
    description,
    userId,
  }

  BOOKS.push(newBook);

  res.status(201).json({ newBook });
}

exports.updateBook = (req, res) => {
  const { title, author, description, userId } = req.body;
  const bookId = req.params;
  const index = BOOKS.findIndex((book) => book.id === bookId);
  let book = { ...BOOKS.find((book) => book.id === bookId) };
  book = {
    title,
    author,
    description,
    userId,
  };

  BOOKS[index] = book;

  res.json({ book });
}

exports.deleteBook = (req, res) => {
  const bookId = req.params;
  const BOOKS = BOOKS.filter((book) => book.id !== bookId);

  res.json(BOOKS);
}
