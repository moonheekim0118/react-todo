import React, { Component } from 'react'
import TodoList from './components/TodoList';
import { hot } from 'react-hot-loader'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList/>
      </div>
    )
  }
}

export default hot(module)(App)