const uuid = require('uuid');
const HttpError = require('../models/httpError');

const USERS = [
  {
    id: 'user1',
    name: 'Maria Starkova',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    books: 3,
  }
];

exports.getUsersList = (req, res) => {
  if (USERS.length === 0) {
    return res.json({message: 'COULD NOT FIND ANY USER'})
  }
  res.json({ USERS });
};

exports.signup = (req, res) => {
  const { name, email, password } = req.body;
  // implement verification if user already exists 
  const newUser = {
    id: uuid(),
    name,
    email,
    password,
  };

  USERS.push(newUser);

  res.status(201).json({user: newUser});
}

exports.login = (req, res) => {
  const { email, passowrd } = req.body;

  const user = USERS.find((user) => {
    return user.email === email && user.passowrd === passowrd;
  });

  if (!user) {
    const error = new HttpError('COULD NOT FIND USER IN DATABASE', 401);
    throw error;
  }

  res.json({ message: 'YOU ARE LOGGED IN'});
};
