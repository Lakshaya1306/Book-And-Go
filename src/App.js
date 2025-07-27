import React from "react";
import "./App.css";
import { Up } from "./Components/Home/Upper/Upper";
import { Bott } from "./Components/Home/Bottom/Bottom";
import { Aboutus } from "./Components/Home/Bottom/About/About";
import { Career } from "./Components/Home/Bottom/Career/Career";
import { Routes, Route } from "react-router-dom";
import { Privacy } from "./Components/Home/Bottom/Privacy/Privacy";
import { FAQs } from "./Components/Home/Bottom/FAQs/FAQs";
import { Myflights } from "./Components/Main_flights/flights/Flights";
import { Mybuses } from "./Components/Main_buses/Bus-div/Buses";
import { MyTrain } from "./Components/Main_trains/Trains";
import { Bookf } from "./Components/Main_flights/flights/bookflight";
import { Bookt } from "./Components/Main_trains/booktrains";
import { Bookb } from "./Components/Main_buses/Bus-div/bookbus";
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <div className="Home">
              <div className="upper">
                <div className="absolute"></div>
                <Up></Up>
              </div>
              <div className="Bottom">
                <Bott></Bott>
              </div>
            </div>
          }
        />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/flights" element={<Myflights />} />
        <Route path="/buses" element={<Mybuses />} />
        <Route path="/trains" element={<MyTrain />} />
        <Route path="/bookflights" element={<Bookf />} />
        <Route path="/booktrains" element={<Bookt />} />
        <Route path="/bookbus" element={<Bookb />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
