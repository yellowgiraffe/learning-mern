const express = require('express');

const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    console.log('GET request in Books route');
    res.json({message: 'Hello'});
});

module.exports = router;
