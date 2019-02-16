import React, { Component } from "react";
import Featured from "./components/featured/index";
import Header from "./components/header_footer/Header";
import Highlights from "./components/highlights/index";
import Location from "./components/location";
import Pricing from "./components/pricing";
import VenueInfo from "./components/venueInfo/index";
import "./resources/styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
        <VenueInfo />
        <Highlights />
        <Pricing />
        <Location />
      </div>
    );
  }
}

export default App;
