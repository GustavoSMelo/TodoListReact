import React from 'react';
import './style.css';

class TodoTxt extends React.Component {
  render() {
    return this.props.todo.map(item => <li key={item}>{item}</li>);
  }
}

export default TodoTxt;
