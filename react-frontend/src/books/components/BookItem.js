import React, { useState } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import './BookItem.css';

const BookItem = (props) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const showModalDeleteHandler = () => {
    setShowDeleteModal(true);
  };

  const hideDeleteModalHandler = () => {
    setShowDeleteModal(false);
  };

  const confirmDeleteHandler = () => {
    console.log('Deleting...');
    setShowDeleteModal(false);
  };

  return (
    <React.Fragment>
      <Modal
        show={showDeleteModal}
        onCancel={hideDeleteModalHandler}
        header="Are you sure?"
        footerClass="book-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={hideDeleteModalHandler}>Cancel</Button>
            <Button danger onClick={confirmDeleteHandler}>Delete</Button>
          </React.Fragment>
        }
      >
      <p>Do you want to proceed and delete this book summary? Please note that it can't be undone thereafter</p>
    </Modal>
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
          <Button danger onClick={showModalDeleteHandler}>Delete</Button>
        </div>
      </Card>
    </li>
    </React.Fragment>
  );
}

export default BookItem;
