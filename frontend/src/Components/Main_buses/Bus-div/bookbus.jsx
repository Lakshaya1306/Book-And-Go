import React from "react";
import "./bookbus.css";
import { Mynav } from "../../Home/Upper/Nav/Nav";
import { Fdetails } from "../../fdetails";
import { Pdetails } from "../../pdetails";
import { Bdetails } from "../../bdetails";
import NewFooter from "../../footer/Newfooter";
export function Bookb() {
  return (
    <React.Fragment>
      <div className="bookbus-image-upper">
        <div className="bookbus-image-wrapper">
          <div className="bookbus-main">
            <div className="bookbus-nav">
              <Mynav />
            </div>
            <div className="bookbus-main-content">
              <div className="bookbus-fare-summary">
                <Fdetails />
              </div>
              <div className="bookbus-details">
                <div className="bus-travel-details-main">
                  <div className="bus-travel-details">
                    <div className="bookbus-bus-detail">
                      <div className="bookbus-bus-logo">
                        <i class="fa-solid fa-bus"></i>
                      </div>
                      <div className="bookbus-bus-content">
                        Volvo Travels <span>1 seat selected</span>
                      </div>
                    </div>
                    <div className="bookbus-travel-detail">
                      <div className="bookbus-travel-places bookbus-place-special">
                        <div className="bookbus-date">Thu,18 July</div>
                        <div className="bookbus-time">02:15</div>
                        <div className="bookbus-place">New Delhi</div>
                        <div className="bookbus-place1">Delhi ISBT</div>
                      </div>
                      <div className="bookbus-travel-duration">35h 15m</div>
                      <div className="bookbus-travel-places bookbus-place-special1">
                        <div className="bookbus-date">Thu,18 July</div>
                        <div className="bookbus-time">14:00</div>
                        <div className="bookbus-place">Mumbai</div>
                        <div className="bookbus-place1">
                          Mumbai Central Bus Stand
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bus-details-fac-main">
                    <div className="bus-details-fac">
                      <div className="bus-details-fac1">
                        <div className="bus-details-fac-icon">
                          <i class="fa-solid fa-fire-extinguisher"></i>
                        </div>
                        <div className="bus-details-fac-desc">
                          (Fire Extinguisher)
                        </div>
                      </div>
                      <div className="bus-details-fac2">
                        <div className="bus-details-fac-icon">
                          <i class="fa-solid fa-charging-station"></i>
                        </div>
                        <div className="bus-details-fac-desc">
                          (Charging Point)
                        </div>
                      </div>
                    </div>
                    <div className="bus-details-fac">
                      <div className="bus-details-fac1">
                        <div className="bus-details-fac-icon">
                          <i class="fa-solid fa-person-through-window"></i>
                        </div>
                        <div className="bus-details-fac-desc">
                          (Emergency Exit)
                        </div>
                      </div>
                      <div className="bus-details-fac2">
                        <div className="bus-details-fac-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div className="bus-details-fac-desc">(TV)</div>
                      </div>
                    </div>
                    <div className="bus-details-fac">
                      <div className="bus-details-fac1">
                        <div className="bus-details-fac-icon">
                          <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="bus-details-fac-desc">
                          (GPS Tracking)
                        </div>
                      </div>
                      <div className="bus-details-fac2">
                        <div className="bus-details-fac-icon">
                          <i class="fa-solid fa-suitcase-medical"></i>
                        </div>
                        <div className="bus-details-fac-desc">(First Aid)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bus-passenger-details">
                  <Pdetails />
                </div>
                <div className="bus-booking-details">
                  <Bdetails />
                </div>
              </div>
            </div>
            <div className="bookbus-footer">
              <NewFooter />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
