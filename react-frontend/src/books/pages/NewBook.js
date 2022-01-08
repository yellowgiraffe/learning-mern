import React, { useCallback, useReducer } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button'
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../shared/components/utils/validators';
import './NewBook.css';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }

      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid}
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

const NewBook = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'CHANGE',
      inputId: id,
      value,
      isValid})
  }, []);

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
