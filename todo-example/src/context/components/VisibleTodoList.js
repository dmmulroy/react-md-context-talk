import React from 'react';

import { Consumer as TodoConsumer } from '../state/todos';
import { Consumer as VisibilityFilterConsumer } from '../state/visibilityFilter';
import TodoList from '../components/TodoList';

const VisibleTodoList = () => (
  <TodoConsumer>
    {({ todos }) => (
      <VisibilityFilterConsumer>
        {({ visibilityFilter }) => (
          <TodoList todos={todos} visibilityFilter={visibilityFilter} />
        )}
      </VisibilityFilterConsumer>
    )}
  </TodoConsumer>
);

export default VisibleTodoList;
