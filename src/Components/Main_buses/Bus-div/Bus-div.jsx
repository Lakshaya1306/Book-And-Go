import React from "react";
import "./Bus-div.css";
import { Link } from "react-router-dom";
export function MYbuscomp({
  name,
  departtime,
  departloc,
  arrivaltime,
  arrivalloc,
  duration,
  price,
}) {
  return (
    <React.Fragment>
      <div className="bus-comp">
        <div className="bus-detail">{name}</div>
        <div className="bus-detail-main2">
          <div className="Bus-Departure">
            <div className="bus-depart-time">{departtime}</div>
            <div className="bus-depart-loc">{departloc}</div>
          </div>
          <div className="Bus-Arrival">
            <div className="bus-arrival-time">{arrivaltime}</div>
            <div className="bus-arrival-loc">{arrivalloc}</div>
          </div>
          <div className="bus-time-duration">{duration}</div>
          <div className="bus-price-main">
            <div className="bus-fair">
              <div className="currency">
                <i class="fa-solid fa-indian-rupee-sign"></i>
              </div>
              {price}
            </div>
          </div>
          <div className="bus-book">
            <Link to="/bookbus">Book</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
