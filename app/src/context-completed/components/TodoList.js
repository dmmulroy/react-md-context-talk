import React from 'react';

import Todo from './Todo';
import visibilityFilters from '../constants/visibilityFilters';

const getFilteredTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case visibilityFilters.SHOW_ALL:
      return todos;
    case visibilityFilters.SHOW_ACTIVE:
      return todos.filter(({ completed }) => !completed);
    case visibilityFilters.SHOW_COMPLETED:
      return todos.filter(({ completed }) => completed);
    default:
      return todos;
  }
};

const TodoList = ({ todos, visibilityFilter }) => {
  const filteredTodos = getFilteredTodos(todos, visibilityFilter);

  return (
    <ul>
      {filteredTodos.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
