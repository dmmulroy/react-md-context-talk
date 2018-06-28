import React from 'react';

const Todo = ({ id, text, completed }) => (
  <li
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
    onClick={() => {}}
  >
    {text}
  </li>
);

export default Todo;
