import React, { Component } from "react";
import Header from "./components/header_footer/Header";
import "./resources/styles.css";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "1500px", background: "cornflowerBlue" }}
      >
        <Header />
      </div>
    );
  }
}

export default App;
