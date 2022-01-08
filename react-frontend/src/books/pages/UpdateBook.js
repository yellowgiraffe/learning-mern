import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/utils/validators';
import './UpdateBook.css';

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

const UpdateBook = (props) => {
  const bookId = useParams().bookId;

  const bookToUpdate = BOOKS.find((book) => book.id === bookId);

  if (!bookToUpdate) {
    return (
      <div className="center">
        <h2>Update your book</h2>
      </div>
    );
  }

  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        label="Book title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Title can not be empty"
        onChange={() => {}}
        value={bookToUpdate.title}
        valid={true}
      />
      <Input
        id="author"
        element="input"
        type="text"
        label="Author"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Author can not be empty"
        onChange={() => {}}
        value={bookToUpdate.author}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)"
        onChange={() => {}}
        value={bookToUpdate.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        SAVE CHANGES
      </Button>
      
    </form>
  );
};

export default UpdateBook;
