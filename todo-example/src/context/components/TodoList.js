import React from 'react';

import { Consumer as TodoConsumer } from '../state/todos';
import visibilityFilters from '../constants/visibilityFilters';

const Todo = ({ id, text }) => (
  <TodoConsumer>
    {({ toggleTodo }) => <p onClick={() => toggleTodo(id)}>{text}</p>}
  </TodoConsumer>
);

const TodoList = ({ todos, toggleTodo, visibilityFilter }) => {
  const filteredTodos =
    visibilityFilter === visibilityFilters.SHOW_ALL
      ? todos
      : todos.filter(
          todo =>
            visibilityFilter === visibilityFilters.SHOW_COMPLETED
              ? todo.completed
              : !todo.completed
        );

  return filteredTodos.map(todo => (
    <Todo key={todo.id} toggleTodo={() => toggleTodo(todo.id)} {...todo} />
  ));
};

export default TodoList;
