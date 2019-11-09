import React from 'react';
import Form from './components/form/index';
import TodoTxt from './components/todoTxt/index';
import Footer from './components/footer/index';
import './style/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [],
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => this.setState({ text: event.target.value });

  handleAdd = async () => {
    await this.setState({
      todo: this.state.todo.concat(this.state.text),
      text: ''
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className='App'>
        <main className='content'>
          <Form
            text={this.state.text}
            handleChange={this.handleChange}
            handleAdd={this.handleAdd}
            handleSubmit={this.handleSubmit}
          ></Form>

          <h1>List of todo</h1>
          <ul>
            <TodoTxt todo={this.state.todo}></TodoTxt>
          </ul>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
