const express = require('express');

const booksRouter = require('./routes/booksRoutes');

const app = express();

app.use(express.json());

app.use(booksRouter);

app.listen(5000);
