import React, { Component } from "react";
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

export default class Discount extends Component {
  state = {
    discountStart:0,
    discountEnd:30
  }

  percentage = () => {
    if(this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      })
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    setTimeout(() => {
      this.percentage()
    }, 30);
  }
  

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
        <Fade onReveal={() => this.percentage()}>

          <div className="discount_percentage">
            <span>{this.state.discountStart}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right>
          <div className="discount_description">
            <h3>Purchase tickets before 15th July</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ipsum esse aspernatur et minus quis excepturi, at exercitationem nisi reiciendis, cum laudantium facere in. Temporibus consequatur minus necessitatibus placeat. Vero.</p>
            <div>buttoin</div>
          </div>
        </Slide>
        </div>
      </div>
    );
  }
}
