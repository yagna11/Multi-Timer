import React, { Component } from "react";
import "./App.css";
import Timer from "./Components/Timer.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Multi Timer</h1>
        </header>
        <Timer />
      </div>
    );
  }
}

export default App;
