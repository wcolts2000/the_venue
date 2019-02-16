import React, { Component } from "react";
import { Element } from "react-scroll";
import Featured from "./components/featured/index";
import Footer from "./components/header_footer/Footer";
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
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="venueinfo">
          <VenueInfo />
        </Element>
        <Element name="highlights">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
