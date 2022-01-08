import React, { useReducer, useEffect } from 'react';

import { validate } from '../../utils/validators';
import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case 'FOCUS':
      return {
        ...state,
        isFocused: true,
      }
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: '',
    isFocused: false,
    isValid: false
  });

  const { id, onChange } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onChange(id, value, isValid)
  }, [id, value, isValid, onChange]);

  const changeHandler = (event) => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value, 
      validators: props.validators,
    });
  };

  const focusHandler= () => {
    dispatch({
      type: 'FOCUS'
    })
  };

  const element = 
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={focusHandler}
        value={inputState.value} />
  ) : (
    <textarea
      id={props.id}
      rows={props.rows || 3}
      onChange={changeHandler}
      onBlur={focusHandler}
      value={inputState.value} />
  );

  return (
    <div
      className={`form-control ${!inputState.isValid && inputState.isFocused &&
        'form-control--invalid'}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isFocused && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
