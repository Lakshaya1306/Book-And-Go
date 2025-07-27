import React from "react";
import "./booktrains.css";
import { Mynav } from "../Home/Upper/Nav/Nav";
import { Fdetails } from "../fdetails";
import { Pdetails } from "../pdetails";
import { Bdetails } from "../bdetails";
import NewFooter from "../footer/Newfooter";
export function Bookt() {
  return (
    <React.Fragment>
      <div className="booktrain-image-upper">
        <div className="booktrain-image-wrapper">
          <div className="booktrain-main">
            <div className="booktrain-nav">
              <Mynav />
            </div>
            <div className="booktrain-main-content">
              <div className="booktrain-fare-summary">
                <Fdetails />
              </div>
              <div className="booktrain-details">
                <div className="train-travel-details">
                  <div className="booktrain-train-detail">
                    <div className="booktrain-train-logo">
                      <i class="fa-solid fa-train"></i>
                    </div>
                    <div className="booktrain-train-content">
                      <div className="booktrain-train-name">
                        Golden Temple Mail
                      </div>
                      <div className="booktrain-train-number">(12049)</div>
                    </div>
                  </div>
                  <div className="booktrain-travel-detail">
                    <div className="booktrain-travel-places booktrain-travel-special">
                      <div className="booktrain-date">Thu,18 Jul</div>
                      <div className="booktrain-place">New-Delhi</div>
                      <div className="booktrain-place1">
                        New-Delhi Railway Station
                      </div>
                      <div className="booktrain-time">Departure: 04:00</div>
                    </div>
                    <div className="booktrain-travel-duration">15h 00m</div>
                    <div className="booktrain-travel-places booktrain-travel-special1">
                    <div className="booktrain-date">Thu,18 Jul</div>
                      <div className="booktrain-place">Mumbai</div>
                      <div className="booktrain-place1">
                        Mumbai Central Railway Station
                      </div>
                      <div className="booktrain-time">Arrival: 16:00</div>
                    </div>
                  </div>
                </div>
                <div className="train-passenger-details">
                  <Pdetails />
                </div>
                <div className="train-booking-details">
                  <Bdetails />
                </div>
              </div>
            </div>
            <div className="booktrain-footer">
              <NewFooter/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
