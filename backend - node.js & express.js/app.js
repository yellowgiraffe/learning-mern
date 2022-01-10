const express = require('express');

const booksRouter = require('./routes/booksRoutes');
const HttpError = require('./models/httpError')

const app = express();

app.use(express.json());

app.use('/api/books', booksRouter);

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

app.listen(5000);
