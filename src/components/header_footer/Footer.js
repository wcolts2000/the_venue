import React from "react";
import Fade from "react-reveal/Fade";

function Footer() {
  return (
    <footer className="bck-red">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">The Venue</div>
        <div className="footer_copyright">
          The Venue 2018. All rights reserved.
        </div>
      </Fade>
    </footer>
  );
}

export default Footer;
