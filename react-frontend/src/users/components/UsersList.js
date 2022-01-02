import React from "react";

import UserItem from "./UserItem";
import './UsersList.css'

const UsersList = (props) => {
  if (props.users.length === 0) {
    return (
      <div className="center">
        <h2>No users found</h2>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.users.map((user) => (
      <UserItem 
        key={user.id} 
        id={user.id} 
        img={user.img} 
        name={user.name} 
        amountOfBooks={user.books}
      />
      ))}
    </ul>
  );
};

export default UsersList;
