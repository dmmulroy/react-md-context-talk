import React from 'react';

import { Consumer as TodoConsumer } from '../state/todos';

const Todo = ({ id, text, completed }) => (
  <TodoConsumer>
    {({ toggleTodo }) => (
      <li
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
        onClick={() => toggleTodo(id)}
      >
        {text}
      </li>
    )}
  </TodoConsumer>
);

export default Todo;
