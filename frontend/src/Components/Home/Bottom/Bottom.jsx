import React from "react";
import "./Bottom.css";
import SimpleSlider from "./slider";
import { Slidercontent } from "./slidercontent";
import NewFooter from "../../footer/Newfooter";
export function Bott() {
  return (
    <React.Fragment>
      <div className="bottom">
        <div className="content1">
          <p>Trending Destinations</p>
          <p>Most popular choices for Travellers from India</p>
        </div>
        <div className="main1">
          <SimpleSlider />
        </div>
        <footer>
          <NewFooter />
        </footer>
      </div>
    </React.Fragment>
  );
}
