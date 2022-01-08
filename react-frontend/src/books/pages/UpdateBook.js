import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/utils/validators';
import { useForm } from '../../shared/hooks/form';
import './BookForm.css';

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

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      author: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      }
    }, false);

    const bookToUpdate = BOOKS.find((book) => book.id === bookId);

    useEffect(() => {
      setFormData({
        title: {
          value: bookToUpdate.title,
          isValid: true,
        },
        author: {
          value: bookToUpdate.author,
          isValid: true,
        },
        description: {
          value: bookToUpdate.description,
          isValid: true,
        }
      }, true)
    }, [setFormData, bookToUpdate]);

    const bookUpdateSubmitHandler = (event) => {
      event.preventDefault();
      console.log(formState.inputs); // Need to send the update to the backend
    }

  if (!bookToUpdate) {
    return (
      <div className="center">
        <h2>Update your book</h2>
      </div>
    );
  }

  return (
    formState.inputs.title.value &&
    <form className="book-form" onSubmit={bookUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Book title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Title can not be empty"
        onChange={inputHandler}
        defaultValue={formState.inputs.title.value}
        defaultValid={formState.inputs.title.isValid}
      />
      <Input
        id="author"
        element="input"
        type="text"
        label="Author"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Author can not be empty"
        onChange={inputHandler}
        defaultValue={formState.inputs.author.value}
        defaultValid={formState.inputs.author.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)"
        onChange={inputHandler}
        defaultValue={formState.inputs.description.value}
        defaultValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        SAVE CHANGES
      </Button>
    </form>
  );
};

export default UpdateBook;
