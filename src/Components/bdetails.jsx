import React from "react";
import "./bdetails.css";

export function Bdetails() {
  return (
    <React.Fragment>
      <div className="bdetails-main">
        <div className="cdetails">
          <div className="cdetails-heading">
            <div className="cdetails-heading1">Contact Details</div>
            <div className="cdetails-heading2">
              Your ticket & flight information will be sent here
            </div>
          </div>
          <div className="cdetails-form">
            <form className="cdetails-form">
              <div className="cdetails-subform">
                <div className="code-main">
                  <label for="c-code" className="label-code">
                    Country Code
                  </label>
                  <select id="c-code" className="input-code">
                    <option value="India(+91)">India(+91)</option>
                    <option value="USA(+1)">USA(+1)</option>
                    <option value="Pakistan(+92)">Pakistan(+92)</option>
                    <option value="UK(+44)">UK(+44)</option>
                    <option value="Canada(+1)">Canada(+1)</option>
                  </select>
                </div>
                <div className="contact-main">
                  <label for="contact" className="label-contact">
                    Contact
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    className="input-contact"
                    required
                  ></input>
                </div>
                <div className="email-main">
                  <label for="email" className="label-email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input-email"
                    placeholder="abc@gmail.com"
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="bdetails">
          <div className="bdetails-heading">
            <div className="bdetails-heading1">Billing Address</div>
            <div className="bdetails-heading2">
              As per the latest govt. regulations, it's mandatory to provide
              your address.
            </div>
          </div>
          <div className="bdetails-address">
            <div className="address-div1">
              <div className="pincode-main">
                <label for="pincode" className="label-pin">
                  PinCode
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  className="input-pincode"
                  placeholder="Enter Pincode.."
                ></input>
              </div>
              <div className="city-main">
                <label for="city" className="label-city">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="input-city"
                  placeholder="Enter City.."
                ></input>
              </div>
            </div>
            <div className="address-div2">
              <div className="address-main">
                <label for="address" className="label-address">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="input-address"
                  placeholder="Enter Address.."
                ></input>
              </div>
              <div className="state-main">
                <label for="state" className="label-state">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="input-state"
                  placeholder="Enter State.."
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="booking-submit">
          <button className="booking-submit-button"type="submit">Submit</button>
        </div>
      </div>
    </React.Fragment>
  );
}
