import React from "react";
import { Consumer } from "../state/todos";
// import Footer from "./Footer";
// import AddTodo from "../containers/AddTodo";
// import VisibleTodoList from "../containers/VisibleTodoList";

const styles = {
  marginTop: "50px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

const App = () => (
  <Consumer>
    {({ todos, toggleTodo }) => (
      <div style={styles}>
        <h1>YATA - Yet Another ToDo App</h1>
        {todos.map(todo => (
          <p onClick={() => toggleTodo(todo.id)}>
            {todo.text} | {String(todo.completed)}
          </p>
        ))}
      </div>
    )}
  </Consumer>
);

//   <AddTodo />
//   <VisibleTodoList />
//   <Footer />

export default App;
