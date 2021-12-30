import React, { useState } from "react";

import './NewGoal.css';

const NewGoal = (props) => {
  let [userInput, setUserInput] = useState('');

  const addGoalHandler = (event) => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: userInput
    };

    setUserInput('');

    props.onAddGoal(newGoal);
  };

  const userInputHandler = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={userInput} onChange={userInputHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
