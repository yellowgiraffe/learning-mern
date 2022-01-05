import React from 'react';
import { useParams } from 'react-router-dom';

import BookList from '../components/BookList';

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
];

const UserBooks = (props) => {
  const { userId } = useParams();
  const userBooks = BOOKS.filter((book) => book.userId === userId);

  return <BookList books={userBooks}/>;
};

export default UserBooks;