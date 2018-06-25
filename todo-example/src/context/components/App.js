import React from 'react';

import AddTodo from '../components/AddTodo';
import VisibleTodoList from '../components/VisibleTodoList';
import VisibilityFilters from '../components/VisibilityFilters';

const styles = {
  marginTop: '50px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};

const App = () => (
  <div style={styles}>
    <h1>YATA - Yet Another ToDo App</h1>
    <AddTodo />
    <VisibleTodoList />
    <VisibilityFilters />
  </div>
);

export default App;
