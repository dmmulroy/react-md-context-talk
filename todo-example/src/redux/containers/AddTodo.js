import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends React.Component {
  state = {
    text: ''
  };

  onTextChange = e => {
    const { value = '' } = e.target;
    this.setState({ text: value });
  };

  onAddTodo = e => {
    const { addTodo } = this.props;
    const { text } = this.state;
    e.preventDefault();

    addTodo(text);
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    return (
      <form>
        <input type="text" onChange={this.onTextChange} value={text} />{' '}
        <button onClick={this.onAddTodo}>Add Todo</button>
      </form>
    );
  }
}

export default connect(
  () => ({}),
  { addTodo }
)(AddTodo);
