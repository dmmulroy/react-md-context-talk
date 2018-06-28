import React from 'react';

import TodoList from '../components/TodoList';

const VisibleTodoList = () => (
  <TodoList todos={todos} visibilityFilter={visibilityFilter} />
);

export default VisibleTodoList;
