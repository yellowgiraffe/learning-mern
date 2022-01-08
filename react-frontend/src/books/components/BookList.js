import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import BookItem from './BookItem';
import Button from '../../shared/components/FormElements/Button';
import './BookList.css'

const BookList = (props) => {
  if (props.books.length === 0) {
    return (
      <div className="book-list center">
        <Card>
          <h2>No books found. Maybe create one?</h2>
          <Button to="/books/new">Shere Book Summary</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="books-list">
      {props.books.map((book) => (
        <BookItem
          key={book.id}
          id={book.id}
          img={book.image}
          title={book.title}
          author={book.author}
          description={book.description}
          userId={book.user}
        />
      ))}
    </ul>
  );
};

export default BookList;
