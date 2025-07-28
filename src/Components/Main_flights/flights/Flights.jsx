import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Flights.css";
import { Filter } from "../../filter/filter";
import { Mynav } from "../../Home/Upper/Nav/Nav";
import { Myflightcomp } from "./Flight-div/flight-div";
import { BTD_flights } from "../../../data/flights/BTD";
import { BTM_flights } from "../../../data/flights/BTM";
import { MTB_flights } from "../../../data/flights/MTB";
import { MTD_flights } from "../../../data/flights/MTD";
import { DTM_flights } from "../../../data/flights/DTM";
import { DTB_flights } from "../../../data/flights/DTB";
import { CategoryContext } from "../../Home/Upper/categorycontext";
import NewFooter from "../../footer/Newfooter";
export function Myflights() {
  //This piece of code is for getting flight data correctly
  const location = useLocation();
  const { category } = useContext(CategoryContext);
  const params = new URLSearchParams(location.search);
  const source = params.get("source");
  const destination = params.get("destination");
  const [date, setDate] = useState(params.get("date"));

  const [selectedDepartureTime, setSelectedDepartureTime] = useState(null);
  const [selectedArrivalTime, setSelectedArrivalTime] = useState(null);
  //This block of code is for selecting and updating the category of the flight ticket

  const [currentflightcat, setcurrentflightcat] = useState("Economy");
  const [selectedflightcat, setselectedflightcat] = useState("Economy");
  const [selectedOption, setSelectedOption] = useState(null);

  const getprice = (data) => {
    switch (currentflightcat) {
      case "Premium-Economy":
        return data.prices.firstClass;
      case "Business":
        return data.prices.business;
      default:
        return data.prices.economy;
    }
  };

  let flightsdata = [];
  if (source === "Bangalore" && destination === "New-Delhi") {
    flightsdata = BTD_flights;
  } else if (source === "Bangalore" && destination === "Mumbai") {
    flightsdata = BTM_flights;
  } else if (source === "Mumbai" && destination === "New-Delhi") {
    flightsdata = MTD_flights;
  } else if (source === "Mumbai" && destination === "Bangalore") {
    flightsdata = MTB_flights;
  } else if (source === "New-Delhi" && destination === "Mumbai") {
    flightsdata = DTM_flights;
  } else {
    flightsdata = DTB_flights;
  }

  const handlesearch = () => {
    setcurrentflightcat(selectedflightcat);
  };

  const handleSortChange = (option) => {
    setSelectedOption((prevOption) => (prevOption === option ? null : option));
  };

  const filteredFlights = flightsdata.filter((flight) => {
    const departureTime = parseInt(flight.departureTime.split(":")[0], 10);
    const arrivalTime = parseInt(flight.arrivalTime.split(":")[0], 10);
    if (selectedDepartureTime && selectedArrivalTime) {
      return (
        departureTime >= selectedDepartureTime[0] &&
        departureTime < selectedDepartureTime[1] &&
        arrivalTime >= selectedArrivalTime[0] &&
        arrivalTime < selectedArrivalTime[1]
      );
    } else if (selectedDepartureTime) {
      return (
        departureTime >= selectedDepartureTime[0] &&
        departureTime < selectedDepartureTime[1]
      );
    } else if (selectedArrivalTime) {
      return (
        arrivalTime >= selectedArrivalTime[0] &&
        arrivalTime < selectedArrivalTime[1]
      );
    }
    return true; // No filter applied
  });

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
      flightsdata.sort((a, b) => getprice(a) - getprice(b));
    } else if (selectedOption === "timeDuration") {
      flightsdata.sort(
        (a, b) => parseDuration(a.duration) - parseDuration(b.duration)
      );
    } else if (selectedOption === "departureTime") {
      flightsdata.sort(
        (a, b) => parseTime(a.departureTime) - parseTime(b.departureTime)
      );
    } else if (selectedOption === "arrivalTime") {
      flightsdata.sort(
        (a, b) => parseTime(a.arrivalTime) - parseTime(b.arrivalTime)
      );
    }
  }, [selectedOption, flightsdata, currentflightcat]);

  if (category !== "flights") {
    return null;
  }
  return (
    <React.Fragment>
      <div className="flight-image-upper">
        <div className="flight-image-wrapper">
          <div className="flight-main">
            <div className="flights-nav">
              <Mynav />
            </div>
            <div className="flights-main">
              <div className="flights-summary-box">
                <div className="flights-summary">
                  <input
                    type="text"
                    name="flight-src"
                    id="flight-src"
                    value={source}
                    className="flight-input"
                    readOnly
                  />
                  <input
                    type="text"
                    name="flight-dest"
                    id="flight-dest"
                    value={destination}
                    className="flight-input"
                    readOnly
                  />
                  <input
                    type="date"
                    name="flight-date"
                    id="flight-date"
                    className="flight-input-date"
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  />
                  <select
                    id="category"
                    name="category"
                    className="flight-input-category"
                    value={selectedflightcat}
                    onChange={(e) => {
                      setselectedflightcat(e.target.value);
                    }}
                  >
                    <option value="Economy">Economy</option>
                    <option value="Business">Business</option>
                    <option value="Premium-Economy">Premium-Economy</option>
                  </select>
                  <div className="flight-submit-box">
                    <button
                      type="button"
                      className="flight-input-submit"
                      onClick={handlesearch}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="flight-main-content">
                <div className="flight-filter-main">
                  <Filter
                    onSortChange={handleSortChange}
                    selectedOption={selectedOption}
                  />
                </div>
                <div className="flight-data-main-outer">
                  <div className="flight-data-main-heading">
                    <div className="airline">Airline</div>
                    <div className="flight-departure">Departure</div>
                    <div className="flight-arrival">Arrival</div>
                    <div className="flight-duration">Duration</div>
                    <div className="flight-price">Price</div>
                  </div>
                  <div className="flight-data-main-content">
                    {flightsdata.map((data, index) => {
                      return (
                        <Myflightcomp
                          key={data.flightNumber || index}
                          name={data.airline}
                          icon={data.image}
                          number={data.flightNumber}
                          departtime={data.departureTime}
                          departloc={data.Departure}
                          arrivaltime={data.arrivalTime}
                          arrivalloc={data.Arrival}
                          duration={data.duration}
                          price={getprice(data)}
                          date={date}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="flights-footer">
              <NewFooter />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
