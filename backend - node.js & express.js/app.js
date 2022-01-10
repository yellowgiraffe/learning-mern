const express = require('express');

const booksRouter = require('./routes/booksRoutes');

const app = express();

app.use(express.json());

app.use('/api/books', booksRouter);

// app.use((req, res) => {
//   res.status(404).json({RESULT: 'NOT FOUND'});
// });

app.use((error, req, res) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(erroe.code || 404).json({RESULT: error.message || 'Anknown error'});
});

app.listen(5000);
