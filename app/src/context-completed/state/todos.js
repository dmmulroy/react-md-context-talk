import React from 'react';

const { Provider, Consumer } = React.createContext();

let idCounter = 0;
class TodoProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      addTodo: this.addTodo,
      toggleTodo: this.toggleTodo
    };
  }

  addTodo = text =>
    this.setState(({ todos }) => ({
      todos: todos.concat({ id: idCounter++, text, completed: false })
    }));

  toggleTodo = id =>
    this.setState(({ todos }) => ({
      todos: todos.map(
        todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }));

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default TodoProvider;
export { Consumer, TodoProvider as Provider };
