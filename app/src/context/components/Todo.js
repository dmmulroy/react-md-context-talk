import React from 'react';

const Todo = ({ id, text, completed }) => (
  <li
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
    onClick={() => toggleTodo(id)}
  >
    {text}
  </li>
);

export default Todo;
