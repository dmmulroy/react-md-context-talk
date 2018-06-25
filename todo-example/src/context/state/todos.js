import React from "react";

const { Provider, Consumer } = React.createContext();

class TodoProvider extends React.Component {
  addTodo = ({ id, text, completed = false }) =>
    this.setState(({ todos }) => ({
      todos: todos.concat({ id, text, completed })
    }));

  toggleTodo = id =>
    this.setState(({ todos }) => ({
      todos: todos.map(
        todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }));

  state = {
    todos: [{ id: 1, text: "default", completed: false }],
    addTodo: this.addTodo,
    toggleTodo: this.toggleTodo
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default TodoProvider;
export { Consumer, TodoProvider as Provider };
