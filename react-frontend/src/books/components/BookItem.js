import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import './BookItem.css';

const BookItem = (props) => {
  return (
    <li className="book-item">
      <Card className="book-item__content">
        <div className="book-item__image">
          <img src={props.img} alt={props.title} />
        </div>
        <div className="book-item__info">
          <h2>{props.title} ({props.author})</h2>
          <p>{props.description}</p>
        </div>
        <div className="book-item__actions">
          <Button inverse>Read</Button>
          <Button to={`/books/${props.id}`}>Edit</Button>
          <Button danger>Delete</Button>
        </div>
      </Card>

    </li>
  );
}

export default BookItem;
