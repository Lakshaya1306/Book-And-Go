import React from "react";
import "./slidercontent.css";
export function Slidercontent({ image, heading, imagecontent }) {
  return (
    <React.Fragment>
      <div className="slidecont-main">
        <div className="slidecont-image">
          <img src={image} alt="image" width={"100%"} height={"100%"}></img>
        </div>
        <div className="slidecont-content">
          <div className="slidecont-heading">{heading}</div>
          <div className="slidecont-content-main">{imagecontent}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
