import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

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
    <Footer />
    <p>Built with: {process.env.REACT_APP_RENDER_TYPE}</p>
  </div>
);

export default App;
