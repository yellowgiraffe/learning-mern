import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 'user1',
      name: 'Maria Starkova',
      image: '',
      books: 3,
    }
  ];
  return <UsersList users={USERS} />;
};

export default Users;