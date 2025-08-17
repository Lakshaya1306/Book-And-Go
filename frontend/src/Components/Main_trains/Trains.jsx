import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Trains.css";
import { Mynav } from "../Home/Upper/Nav/Nav";
import { Filter } from "../filter/filter";
import { Mytrainscomp } from "./trains-div/trains-div";
import { BTD_trains } from "../../data/trains/BTD";
import { BTM_trains } from "../../data/trains/BTM";
import { MTD_trains } from "../../data/trains/MTD";
import { MTB_trains } from "../../data/trains/MTB";
import { DTB_trains } from "../../data/trains/DTB";
import { DTM_trains } from "../../data/trains/DTM";
import { CategoryContext } from "../Home/Upper/categorycontext";
import NewFooter from "../footer/Newfooter";
export function MyTrain() {
  const location = useLocation();
  const { category } = useContext(CategoryContext);
  const params = new URLSearchParams(location.search);
  const source = params.get("source");
  const destination = params.get("destination");

  const [date, setDate] = useState(params.get("date"));

  const [currenttraincat, setcurrenttraincat] = useState("sleeper");
  const [selectedtraincat, setselectedtraincat] = useState("sleeper");
  const [selectedOption, setSelectedOption] = useState(null);
  const getprice = (data) => {
    switch (currenttraincat) {
      case "3 AC":
        return data.prices.thirdAC;
      case "2 AC":
        return data.prices.secondAC;
      case "1 AC":
        return data.prices.firstAC;
      default:
        return data.prices.sleeper;
    }
  };

  const handlesearch = () => {
    setcurrenttraincat(selectedtraincat);
  };

  let trainsdata = [];
  if (source === "Bangalore" && destination === "New-Delhi") {
    trainsdata = BTD_trains;
  } else if (source === "Bangalore" && destination === "Mumbai") {
    trainsdata = BTM_trains;
  } else if (source === "Mumbai" && destination === "New-Delhi") {
    trainsdata = MTD_trains;
  } else if (source === "Mumbai" && destination === "Bangalore") {
    trainsdata = MTB_trains;
  } else if (source === "New-Delhi" && destination === "Mumbai") {
    trainsdata = DTM_trains;
  } else {
    trainsdata = DTB_trains;
  }

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
      trainsdata.sort((a, b) => getprice(a) - getprice(b));
    } else if (selectedOption === "timeDuration") {
      trainsdata.sort(
        (a, b) => parseDuration(a.duration) - parseDuration(b.duration)
      );
    } else if (selectedOption === "departureTime") {
      trainsdata.sort(
        (a, b) => parseTime(a.departureTime) - parseTime(b.departureTime)
      );
    } else if (selectedOption === "arrivalTime") {
      trainsdata.sort(
        (a, b) => parseTime(a.arrivalTime) - parseTime(b.arrivalTime)
      );
    }
  }, [selectedOption, trainsdata, currenttraincat]);

  if (category !== "trains") {
    return null;
  }
  return (
    <React.Fragment>
      <div className="train-image-upper">
        <div className="train-image-wrapper">
          <div className="trains-main">
            <div className="train-nav">
              <Mynav />
            </div>
            <div className="train-main">
              <div className="train-summary-box">
                <div className="train-summary">
                  <input
                    type="text"
                    name="train-src"
                    id="train-src"
                    value={source}
                    className="train-input"
                    readOnly
                  />
                  <input
                    type="text"
                    name="train-dest"
                    id="train-dest"
                    value={destination}
                    className="train-input"
                    readOnly
                  />
                  <input
                    type="date"
                    name="train-date"
                    id="train-date"
                    className="train-input-date"
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  />
                  <select
                    id="category"
                    name="category"
                    className="train-input-category"
                    value={selectedtraincat}
                    onChange={(e) => {
                      setselectedtraincat(e.target.value);
                    }}
                  >
                    <option value="Sleeper" selected>
                      Sleeper
                    </option>
                    <option value="3 AC">3 AC</option>
                    <option value="2 AC">2 AC</option>
                    <option value="1 AC">1 AC</option>
                  </select>
                  <div className="train-submit-box">
                    <button
                      type="button"
                      className="train-input-submit"
                      onClick={handlesearch}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="train-main-content">
                <div className="train-filter-main">
                  <Filter
                    onSortChange={handleSortChange}
                    selectedOption={selectedOption}
                  />
                </div>
                <div className="train-data-main-outer">
                  <div className="train-data-main-heading">
                    <div className="train-name">Train Name</div>
                    <div className="train-departure">Departure</div>
                    <div className="train-arrival">Arrival</div>
                    <div className="train-duration">Duration</div>
                    <div className="train-price">Price</div>
                  </div>
                  <div className="train-data-main-content">
                    {trainsdata.map((data, index) => {
                      return (
                        <Mytrainscomp
                          key={data.trainNumber || index}
                          name={data.trainName}
                          number={data.trainNumber}
                          departtime={data.departureTime}
                          departloc={data.Departure}
                          arrivaltime={data.arrivalTime}
                          arrivalloc={data.Arrival}
                          duration={data.duration}
                          price={getprice(data)}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="train-footer">
              <NewFooter />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
