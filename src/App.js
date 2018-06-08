import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ui container">
          <div className="ui three item menu">
            <a exact activeClassName="active" className="item" to="/">Home</a>
            <a exact activeClassName="active" className="item" to="/games">Games</a>
            <a activeClassName="active" className="item" to="/games/new">Add New Game</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
