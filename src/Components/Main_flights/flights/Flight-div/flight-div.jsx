import React from "react";
import "./flight-div.css";
import { Link } from "react-router-dom";
export function Myflightcomp({
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
  departureFilter,
  arrivalFilter,
}) {
  const isFlightInTimeRange = () => {
    if (departureFilter && arrivalFilter) {
      const [depStart, depEnd] = departureFilter;
      const [arrStart, arrEnd] = arrivalFilter;
      const depHour = parseInt(departtime.split(":")[0], 10);
      const arrHour = parseInt(arrivaltime.split(":")[0], 10);

      return (
        depHour >= depStart &&
        depHour < depEnd &&
        arrHour >= arrStart &&
        arrHour < arrEnd
      );
    }
    return true;
  };

  if (!isFlightInTimeRange()) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="flight-comp">
        <div className="airline-detail-main">
          <div className="airline-icon">
            <img src={icon} alt="airline" width="100%" height="100%"></img>
          </div>
          <div className="airline-detail">
            <div className="airline-name">{name}</div>
            <div className="airline-number">{number}</div>
          </div>
        </div>
        <div className="airline-detail-main2">
          <div className="airline-departure">
            <div className="airline-depart-time">{departtime}</div>
            <div className="airline-depart-loc">{departloc}</div>
          </div>
          <div className="airline-arrival">
            <div className="airline-arrive-time">{arrivaltime}</div>
            <div className="airline-arrive-loc">{arrivalloc}</div>
          </div>
          <div className="airline-duration">{duration}</div>
          <div className="trip-price-main">
            <div className="trip-price">
              <div className="currency">
                <i class="fa-solid fa-indian-rupee-sign"></i>
              </div>
              {price}
            </div>
          </div>
          <div className="flight-book">
            <Link
              to={{
                pathname: "/bookflights",
                state: {
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
                },
              }}
            >
              Book
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
