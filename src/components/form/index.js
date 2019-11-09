import React from 'react';
import './style.css';

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          type='text'
          value={this.props.text}
          onChange={this.props.handleChange}
          placeholder='📋 insert one thing to do'
          role='img'
        />
        <br />
        <button
          type='button'
          onClick={this.props.handleAdd}
          text={this.props.text}
          role='img'
        >
          ➕ <span>Adicionar To-do</span>
        </button>
      </form>
    );
  }
}

export default Form;
