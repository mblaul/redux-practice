import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {P}

import Posts from "./Components/Posts";
import Postform from "./Components/Postform";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Postform />
        <hr />
        <Posts />
      </div>
    );
  }
}

export default App;
