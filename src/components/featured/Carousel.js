import React from "react";
import Slider from "react-slick";
import slide_one from "../../resources/images/slide_one.jpg";
import slide_three from "../../resources/images/slide_three.jpg";
import slide_two from "../../resources/images/slide_two.jpg";

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  };

  return (
    <div
      className="carrousel_wrapper"
      style={{ overflow: "hidden", height: `${window.innerHeight}px` }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              height: `${window.innerHeight}px`,
              background: `url(${slide_one})`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              height: `${window.innerHeight}px`,
              background: `url(${slide_two})`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              height: `${window.innerHeight}px`,
              background: `url(${slide_three})`
            }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
