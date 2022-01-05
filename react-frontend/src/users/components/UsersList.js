import React from "react";

import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";
import './UsersList.css'

const UsersList = (props) => {
  if (props.users.length === 0) {
    return (
      <div className="center">
        <Card>
        <h2>No users found</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.users.map((user) => (
      <UserItem 
        key={user.id} 
        id={user.id} 
        img={user.image} 
        name={user.name} 
        amountOfBooks={user.books}
      />
      ))}
    </ul>
  );
};

export default UsersList;
