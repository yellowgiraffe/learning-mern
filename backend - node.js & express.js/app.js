const express = require('express');
const mongoose = require('mongoose');

const booksRouter = require('./routes/booksRoutes');
const usersRouter = require('./routes/usersRoutes');
const HttpError = require('./models/httpError');
const url = require('./mongoUrl');

const app = express();

app.use(express.json());

app.use('/api/books', booksRouter);
app.use('/api/users', usersRouter);

app.use((req, res) => {
  const error = new HttpError('PAGE NOT FOUND', 404)
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 404).json({RESULT: error.message || 'Anknown error'});
});

mongoose
  .connect(url)
  .then(() => {
    app.listen(5000);
  }).catch((err) => {
    console.log(err)
  });
