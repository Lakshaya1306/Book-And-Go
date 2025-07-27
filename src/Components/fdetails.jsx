import React from "react";
import "./fdetails.css";

export function Fdetails() {
  return (
    <React.Fragment>
      <div className="fdetails-main">
        <div className="fdetails-heading">Fare Summary</div>
        <div className="fdetails-type">
          <div className="type-head">Fare Type</div>
          <div className="type-content">Partially Refundable</div>
        </div>
        <div className="fdetails-type">
          <div className="type-head">Base Fare (Economy)</div>
          <div className="base-fare">
            <div className="fare-icon">
              <i class="fa-solid fa-indian-rupee-sign"></i>
            </div>
            <div className="fare-content">5,000</div>
          </div>
        </div>
        <div className="fdetails-type taxes">
          <div className="type-head">Taxes & Fees</div>
          <div className="base-fare">
            <div className="fare-icon">
              <i class="fa-solid fa-indian-rupee-sign"></i>
            </div>
            <div className="fare-content">700</div>
          </div>
        </div>
        <div className="fdetails-type off">
          <div className="type-head">Instant off</div>
          <div className="base-fare">
            <div className="sign">-</div>
            <div className="fare-icon-special">
              <i class="fa-solid fa-indian-rupee-sign"></i>
            </div>
            <div className="fare-content-special">500</div>
          </div>
        </div>
        <div className="fdetails-total">
          <div className="total-head"> Total Amount</div>
          <div className="total-fare">
            <div className="total-fare-icon">
            <i class="fa-solid fa-indian-rupee-sign"></i>
            </div>
            <div className="total-fare-content">
                5,200
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
