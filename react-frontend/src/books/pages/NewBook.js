import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/components/utils/validators';
import './NewBook.css';

const NewBook = () => {
  return (
    <form className="book-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title" />
    </form>
  );
};

export default NewBook;
