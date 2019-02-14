import React from "react";
import Zoom from "react-reveal/Zoom";
import icon_calendar from "../../resources/images/icons/calendar.png";
import icon_location from "../../resources/images/icons/location.png";

function VenueInfo() {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red">
                    <div
                      className="vn_icon"
                      style={{ background: `url(${icon_calendar})` }}
                    />
                  </div>
                  <div className="vn_title">Event Date &amp; Time</div>
                  <div className="vn_desc">7 August 2020 @ 10.00 pm</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom delay={500} duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow">
                    <div
                      className="vn_icon"
                      style={{ background: `url(${icon_location})` }}
                    />
                  </div>
                  <div className="vn_title">Event Location</div>
                  <div className="vn_desc">
                    123 Main Street St Florestine New Ralsburg
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default VenueInfo;
