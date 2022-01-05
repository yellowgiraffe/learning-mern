import React from 'react';

import Card from '../../shared/components/UIElements/Card';
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
          <button>Read</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </Card>

    </li>
  );
}

export default BookItem;
