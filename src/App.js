import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Foods from "./components/food/Foods";

class App extends Component {
  componentDidMount() {
    console.log(123);
  }
  render() {
    return (
      <div className="App">
        <Navbar title="Lucky Start" icon="fas fa-pepper-hot" />
        <div className="container">
          <Foods />
        </div>
      </div>
    );
  }
}

export default App;
