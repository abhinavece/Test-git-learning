import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      headerText: "This is my webapp",
      contentText: "In this lecture, we will go over the Components API"
    };
  }
  render() {
    return (
      <div className="App">
        {
          /*
          <h1>{this.state.headerText}</h1>
          <p>{this.state.contentText}</p>
          */
        }
        <Content />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <p className="App-intro">
        <h1>Components API!</h1>
        <p>In this lecture, we will go over the Components API .</p>
      </p>
    );
  }
}

export default App;
