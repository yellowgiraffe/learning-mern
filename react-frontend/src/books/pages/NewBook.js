import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button'
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../shared/utils/validators';
import { useForm } from '../../shared/hooks/form';
import './BookForm.css';

const NewBook = () => {
  const [formState, inputHandler] = useForm(
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
      },
    },
    false
  );

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); // Need to send to the backend
  }

  return (
    <form className="book-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Book title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Title can not be empty"
        onChange={inputHandler}
      />
      <Input
        id="author"
        element="input"
        type="text"
        label="Author"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Author can not be empty"
        onChange={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)"
        onChange={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD BOOK
      </Button>
    </form>
  );
};

export default NewBook;
