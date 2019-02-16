import React from "react";

function Location() {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d849.586096890047!2d-14.008947696891108!3d64.79380736633833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48cec9f3146b0e23%3A0x512189eb3a2f91d1!2sN1!5e0!3m2!1sen!2sus!4v1550295690873"
        width="100%"
        height="450px"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
}

export default Location;
