import React from "react";
import "./trains-div.css";
import { Link } from "react-router-dom";
export function Mytrainscomp({
  name,
  number,
  departtime,
  departloc,
  arrivaltime,
  arrivalloc,
  duration,
  price,
}) {
  return (
    <React.Fragment>
      <div className="trains-comp">
        <div className="train-detail-main">
          <div className="Train-number">{number}</div>
          <div className="Train-name">{name}</div>
        </div>
        <div className="train-detail-main2">
          <div className="Train-departure">
            <div className="train-depart-time">{departtime}</div>
            <div className="train-depart-loc">{departloc}</div>
          </div>
          <div className="Train-arrival">
            <div className="train-arrival-time">{arrivaltime}</div>
            <div className="train-arrival-loc">{arrivalloc}</div>
          </div>
          <div className="train-time-duration">{duration}</div>
          <div className="trip-price-main">
            <div className="trip-price">
              <div className="currency">
                <i class="fa-solid fa-indian-rupee-sign"></i>
              </div>
              {price}
            </div>
          </div>
          <div className="train-book">
            <Link to="/booktrains">Book</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
