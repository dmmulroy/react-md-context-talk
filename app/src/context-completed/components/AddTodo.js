import React from 'react';
import { Consumer as TodoConsumer } from '../state/todos';

class AddTodo extends React.Component {
  state = {
    text: ''
  };

  onTextChange = e => {
    const { value = '' } = e.target;
    this.setState({ text: value });
  };

  render() {
    const { text } = this.state;
    return (
      <TodoConsumer>
        {({ addTodo }) => (
          <form>
            <input type="text" onChange={this.onTextChange} value={text} />{' '}
            <button
              onClick={e => {
                e.preventDefault();
                addTodo(text);
                this.setState({ text: '' });
              }}
            >
              Add Todo
            </button>
          </form>
        )}
      </TodoConsumer>
    );
  }
}

export default AddTodo;
