import React, { Component } from "react";
import Featured from "./components/featured/index";
import Header from "./components/header_footer/Header";
import VenueInfo from "./components/venueInfo/index";
import "./resources/styles.css";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "1500px", background: "cornflowerBlue" }}
      >
        <Header />
        <Featured />
        <VenueInfo />
      </div>
    );
  }
}

export default App;
