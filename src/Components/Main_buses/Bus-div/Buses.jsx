import React, { useState, useContext, useEffect } from "react";
import "./Buses.css";
import { Mynav } from "../../Home/Upper/Nav/Nav";
import { Filter } from "../../filter/filter";
import { MYbuscomp } from "./Bus-div";
import { BTD_buses } from "../../../data/Buses/BTD";
import { BTM_buses } from "../../../data/Buses/BTM";
import { MTD_buses } from "../../../data/Buses/MTD";
import { MTB_buses } from "../../../data/Buses/MTB";
import { DTB_buses } from "../../../data/Buses/DTB";
import { DTM_buses } from "../../../data/Buses/DTM";
import { useLocation } from "react-router-dom";
import { CategoryContext } from "../../Home/Upper/categorycontext";
import NewFooter from "../../footer/Newfooter";
export function Mybuses() {
  const location = useLocation();
  const { category } = useContext(CategoryContext);

  const params = new URLSearchParams(location.search);
  const source = params.get("source");
  const destination = params.get("destination");
  const [date, setDate] = useState(params.get("date"));

  let busesdata = [];
  if (source === "Bangalore" && destination === "New-Delhi") {
    busesdata = BTD_buses;
  } else if (source === "Bangalore" && destination === "Mumbai") {
    busesdata = BTM_buses;
  } else if (source === "Mumbai" && destination === "New-Delhi") {
    busesdata = MTD_buses;
  } else if (source === "Mumbai" && destination === "Bangalore") {
    busesdata = MTB_buses;
  } else if (source === "New-Delhi" && destination === "Mumbai") {
    busesdata = DTM_buses;
  } else {
    busesdata = DTB_buses;
  }

  const [selectedOption, setSelectedOption] = useState(null);
  const handleSortChange = (option) => {
    setSelectedOption((prevOption) => (prevOption === option ? null : option));
  };
  useEffect(() => {
    const parseTime = (timeString) => {
      const [hours, minutes] = timeString.split(":").map(Number);
      return new Date(1970, 0, 1, hours, minutes, 0);
    };
    const parseDuration = (durationString) => {
      const [hours, minutes] = durationString.split(/[h m]+/).map(Number);
      return hours * 60 + minutes;
    };

    if (selectedOption === "price") {
      busesdata.sort((a, b) => a.price - b.price);
    } else if (selectedOption === "timeDuration") {
      busesdata.sort((a, b) => parseDuration(a.duration) - parseDuration(b.duration));
    } else if (selectedOption === "departureTime") {
      busesdata.sort(
        (a, b) => parseTime(a.departureTime) - parseTime(b.departureTime)
      );
    } else if (selectedOption === "arrivalTime") {
      busesdata.sort(
        (a, b) => parseTime(a.arrivalTime) - parseTime(b.arrivalTime)
      );
    }
  }, [selectedOption, busesdata]);

  if (category !== "buses") {
    return null;
  }
  return (
    <React.Fragment>
      <div className="bus-image-upper">
        <div className="bus-image-wrapper">
          <div className="bus-mains">
            <div className="bus-nav">
              <Mynav />
            </div>
            <div className="bus-main">
              <div className="bus-summary-box">
                <div className="bus-summary">
                  <input
                    type="text"
                    name="bus-src"
                    id="bus-src"
                    value={source}
                    className="bus-input"
                    readOnly
                  />
                  <input
                    type="text"
                    name="bus-dest"
                    id="bus-dest"
                    value={destination}
                    className="bus-input"
                    readOnly
                  />
                  <input
                    type="date"
                    name="bus-date"
                    id="bus-date"
                    className="bus-input-date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <div className="bus-submit-box">
                    <button type="button" className="bus-input-submit">
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="bus-main-content">
                <div className="bus-filter-main">
                  <Filter
                    onSortChange={handleSortChange}
                    selectedOptions={selectedOption}
                  /> 
                </div>
                <div className="bus-data-main-outer">
                  <div className="bus-data-main-heading">
                    <div className="bus-name">Bus Operator</div>
                    <div className="bus-departure">Departure</div>
                    <div className="bus-arrival">Arrival</div>
                    <div className="bus-duration">Duration</div>
                    <div className="bus-price">Price</div>
                  </div>
                  <div className="bus-data-main-content">
                    {busesdata.map((data, index) => {
                      return (
                        <MYbuscomp
                          key={index}
                          name={data.busOperator}
                          departtime={data.departureTime}
                          departloc={data.Departure}
                          arrivaltime={data.arrivalTime}
                          arrivalloc={data.Arrival}
                          duration={data.duration}
                          price={data.price}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="bus-footer">
              <NewFooter/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
