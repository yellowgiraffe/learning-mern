import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL
} from '../../shared/utils/validators';
import { useForm } from '../../shared/hooks/form';
import { LoginContext } from '../../shared/context/login-contex';

import './Login.css';

const Login = () => {
  const auth = useContext(LoginContext);

  const [isLoginMode, setLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const loginHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); // Need to send to the backend
    auth.login();
  }

  const switchModeHandler = (event) => {
    if (!isLoginMode) {
      setFormData({
        ...formState.inputs,
        name: undefined,
      },
      formState.inputs.email.isValid && formState.inputs.password.isValid);
    } else {
      setFormData({
        ...formState.inputs,
        name: {
          value: '',
          isValid: false,
        }
      }, false);
    }
    setLoginMode((prevMode) => !prevMode);
  }

  return (
    <Card className="login">
      <h2>Login here</h2>
      <hr />
      <form onSubmit={loginHandler}>
        {!isLoginMode &&
          <Input
          id="name"
          element="input"
          type="text"
          label="Your name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a name"
          onChange={inputHandler}
      />
      }
        <Input
          id="email"
          element="input"
          type="email"
          label="Your email"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL]}
          errorText="Please provide a correct email address"
          onChange={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Your password"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
          errorText="Your passowrd should have at least 5 characters"
          onChange={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>{isLoginMode ? 'Log in' : 'Sign up'}</Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        Switch to {isLoginMode ? 'Sign Up' : 'Log in'}
        </Button>
    </Card>
  );
};

export default Login;
