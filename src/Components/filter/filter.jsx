import React, { useState } from "react";
import "./filter.css";
import img1 from "../filter/sunrise.png";
import img2 from "../filter/sun.png";
import img3 from "../filter/noon.png";
import img4 from "../filter/night.png";
export function Filter({ onSortChange, selectedOption, onTimeFilterChange }) {
  const [departureTime, setDepartureTime] = useState(null);
  const [arrivalTime, setArrivalTime] = useState(null);

  const isActive = (option) => selectedOption === option;
  const handleDepartureTimeChange = (timeRange) => {
    setDepartureTime(timeRange);
    onTimeFilterChange("departure", timeRange);
  };

  const handleArrivalTimeChange = (timeRange) => {
    setArrivalTime(timeRange);
    onTimeFilterChange("arrival", timeRange);
  };
  return (
    <React.Fragment>
      <div className="flight-filter">
        <div className="flight-sort">
          <div className="sort-content">Sort By</div>
          <div className="sort-icon">
            <i class="fa-solid fa-sort"></i>
          </div>
          <div className="sort-dropdown">
            <div className="sort-dropdown-div">
              <div
                className={isActive("price") ? "active" : ""}
                onClick={() => onSortChange("price")}
              >
                Price
              </div>
              <div
                className={isActive("timeDuration") ? "active" : ""}
                onClick={() => onSortChange("timeDuration")}
              >
                Time Duration
              </div>
            </div>
            <div className="sort-dropdown-div">
              <div
                className={isActive("departureTime") ? "active" : ""}
                onClick={() => onSortChange("departureTime")}
              >
                Departure Time
              </div>
              <div
                className={isActive("arrivalTime") ? "active" : ""}
                onClick={() => onSortChange("arrivalTime")}
              >
                Arrival Time
              </div>
            </div>
          </div>
        </div>
        <div className="flight-filter-price-duration">
          <label for="filter-price">Price:</label>
          <input
            name="filter-price"
            id="filter-price"
            type="range"
            min={4000}
            max={8000}
          />
          <div className="filter-min-max">
            <div className="filter-min">Min Price:</div>
            <div className="filter-max">Max-Price:</div>
          </div>
        </div>
        <div className="flight-filter-time">
          <div className="filter-time-content">Time Preference</div>
          <div className="filter-time-depart">
            <div className="depart-content">Departure:</div>
            <div className="depart-options">
              <div
                className={`depart-options-div ${
                  departureTime === "00-06" ? "active1" : ""
                }`}
                onClick={() => handleDepartureTimeChange("00-06")}
              >
                <img src={img1} alt="img" width="50%" height="50%" />
                <div>00:00 - 6:00</div>
              </div>
              <div
                className={`depart-options-div ${
                  departureTime === "06-12" ? "active1" : ""
                }`}
                onClick={() => handleDepartureTimeChange("06-12")}
              >
                <img src={img2} alt="img" width="50%" height="50%" />
                <div>6:00-12:00</div>
              </div>
              <div
                className={`depart-options-div ${
                  departureTime === "12-18" ? "active1" : ""
                }`}
                onClick={() => handleDepartureTimeChange("12-18")}
              >
                <img src={img3} alt="img" width="50%" height="50%" />
                <div>12:00-18:00</div>
              </div>
              <div
                className={`depart-options-div ${
                  departureTime === "18-24" ? "active1" : ""
                }`}
                onClick={() => handleDepartureTimeChange("18-24")}
              >
                <img src={img4} alt="img" width="50%" height="50%" />
                <div>18:00-24:00</div>
              </div>
            </div>
            <div className="depart-content">Arrival:</div>
            <div className="depart-options">
              <div className={`depart-options-div ${
                  arrivalTime === "00-06" ? "active1" : ""
                }`}
                onClick={() => handleArrivalTimeChange("00-06")}>
                <img src={img1} alt="img" width="50%" height="50%" />
                <div>00:00 - 6:00</div>
              </div>
              <div className={`depart-options-div ${
                  arrivalTime === "06-12" ? "active1" : ""
                }`}
                onClick={() => handleArrivalTimeChange("06-12")}>
                <img src={img2} alt="img" width="50%" height="50%" />
                <div>6:00-12:00</div>
              </div>
              <div className={`depart-options-div ${
                  arrivalTime === "12-18" ? "active1" : ""
                }`}
                onClick={() => handleArrivalTimeChange("12-18")}>
                <img src={img3} alt="img" width="50%" height="50%" />
                <div>12:00-18:00</div>
              </div>
              <div className={`depart-options-div ${
                  arrivalTime === "18-24" ? "active1" : ""
                }`}
                onClick={() => handleArrivalTimeChange("18-24")}>
                <img src={img4} alt="img" width="50%" height="50%" />
                <div>18:00-24:00</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flight-filter-price-duration">
          <label for="filter-price">Time Duration:</label>
          <input
            name="filter-price"
            id="filter-price"
            type="range"
            min={4000}
            max={8000}
          />
          <div className="filter-min-max">
            <div className="filter-min">Min-Time:</div>
            <div className="filter-max">Max-Time:</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
