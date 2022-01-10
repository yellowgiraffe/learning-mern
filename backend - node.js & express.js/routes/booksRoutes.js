const express = require('express');

const router = express.Router();

const BOOKS = [
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
]

const USERS = [
  {
    id: 'user1',
    name: 'Maria Starkova',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    books: 3,
  }
];

router
  .route('/:bookId')
  .get((req, res) => {
    const bookId = req.params.bookId;
    res.json({FOUND: BOOKS.find((book) => book.id === bookId)});
});

router
  .route('/user/:userId')
  .get((req, res) => {
    const userId = req.params.userId;
    res.json({FOUND: BOOKS.find((book) => book.userId === userId)})
  })

module.exports = router;
