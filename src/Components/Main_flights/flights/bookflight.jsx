import React from "react";
import "./bookflight.css";
import { useLocation } from "react-router-dom";
import { Mynav } from "../../Home/Upper/Nav/Nav";
import { Fdetails } from "../../fdetails";
import { Pdetails } from "../../pdetails";
import { Bdetails } from "../../bdetails";
import img1 from "../../../Images/Flights/airline-logo/air-india-logo.png";
import NewFooter from "../../footer/Newfooter";
export function Bookf() {
  const location = useLocation();
  const {
    name,       
    icon,
    number,
    departtime,
    departloc,
    arrivaltime,
    arrivalloc,
    duration,
    price,
    date,
  } = location.state || {};
  const formatDate = (date) => {
    const options = { weekday: "short", day: "2-digit", month: "short" };
    const parsedDate = new Date(date);
    if(isNaN(parsedDate)){
      return "Invalid Date"; 
    }
    return parsedDate.toLocaleDateString("en-US", options);
  };
  return (
    <React.Fragment>
      <div className="bookflight-image-upper">
        <div className="bookflight-image-wrapper">
          <div className="bookflight-main">
            <div className="bookflight-nav">
              <Mynav />
            </div>
            <div className="bookflight-main-content">
              <div className="bookflight-fare-summary">
                <Fdetails />
              </div>
              <div className="bookflight-details">
                <div className="flight-travel-details-main">
                  <div className="flight-travel-details">
                    <div className="bookflight-airline-detail">
                      <div className="bookflight-airline-logo">
                        <img
                          src={icon || img1}
                          alr="logo"
                          width="100%"
                          height="100%"
                        ></img>
                      </div>
                      <div className="bookflight-airline-content">
                        {name || "Air India"}{" "}
                        <span>({number || "AI 860"})</span>
                      </div>
                    </div>
                    <div className="bookflight-travel-detail">
                      <div className="bookflight-travel-places bookflight-place-special">
                        <div className="bookflight-date">
                          {formatDate(date) || "Thu,18 Jul"}
                        </div>
                        <div className="bookflight-time">
                          {departtime || "02:15"}
                        </div>
                        <div className="bookflight-place">
                          {departloc || "New Delhi"}
                        </div>
                        <div className="bookflight-place1">
                          Indra Gandhi International Airport
                        </div>
                        <div className="bookflight-terminal">Terminal-2</div>
                      </div>
                      <div className="bookflight-travel-duration">
                        {duration || "2h 15m"}
                      </div>
                      <div className="bookflight-travel-places">
                        <div className="bookflight-date">
                          {formatDate(date) || "Thu,18 Jul"}
                        </div>
                        <div className="bookflight-time">
                          {arrivaltime || "04:30"}
                        </div>
                        <div className="bookflight-place">
                          {arrivalloc || "Mumbai"}
                        </div>
                        <div className="bookflight-place1">
                          Chatrapati Shivaji International Airport
                        </div>
                        <div className="bookflight-terminal">Terminal-3</div>
                      </div>
                    </div>
                  </div>
                  <div className="flight-details-baggage-main">
                    <div className="flight-details-baggage">
                      <div className="baggage">
                        <div className="baggage-bold">Baggage</div>
                        <div className="baggage-normal">Per Traveller</div>
                      </div>
                      <div className="baggage">
                        <div className="baggage-bold">Cabin</div>
                        <div className="baggage-normal">7 Kg(1 piece)</div>
                      </div>
                      <div className="baggage">
                        <div className="baggage-bold">Check-in</div>
                        <div className="baggage-normal">15 Kg(1 piece)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flight-passenger-details">
                  <Pdetails />
                </div>
                <div className="flight-booking-details">
                  <Bdetails />
                </div>
              </div>
            </div>
            <div className="bookflight-footer">
              <NewFooter/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
