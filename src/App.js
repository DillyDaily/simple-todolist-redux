import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple Todo List</h1>
        </header>
        <div>
          <TodoInput />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
