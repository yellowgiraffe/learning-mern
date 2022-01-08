import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import './NewBook.css';

const NewBook = () => {
  return (
    <form className="book-form">
      <Input element="input" type="text" label="Title" validators={[]} onInput={} />
    </form>
  );
};

export default NewBook;
