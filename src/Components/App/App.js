import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AddThoughtForm } from '../AddThoughtForm/AddThoughtForm';
import { Thought } from '../Thought/Thought';
import { generateId, getNewExpirationTime } from '../utilities';
import "./App.css";

export default function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = thought => {
    setThoughts(thoughts => [thought, ...thoughts]);
  }

  return (
    <div className="App">
      <div class="header">
        <h1>Passing Thoughts</h1>
      </div>
      <div class="main">
        <AddThoughtForm addThought={addThought}/>
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} />
          ))}
        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
