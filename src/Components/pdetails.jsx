import React from "react";
import "./pdetails.css";

export function Pdetails() {
  return (
    <React.Fragment>
      <div className="pdetails-main">
        <div className="pdetails-heading">
          <div className="pdetails-heading1">Traveller Details</div>
          <div className="pdetails-heading2">
            Choose from the saved list or add a new Passenger
          </div>
        </div>
        <div className="pdetails-notice">
          <i class="fa-regular fa-id-card"></i>
          <div>
            Please ensure that your name matches your govt. ID such as Aadhaar,
            Passport or Driver's License
          </div>
        </div>
        <div className="add-pdetails">+ Add Passenger/infant with birth</div>
        <div className="pdetails-form">
          <form className="pdetails-form-main">
            <fieldset>
              <legend>Passenger's Name </legend>
              <label for="fname">First Name:</label>
              <input
                type="text"
                id="fname"
                name="fname"
                className="form-fname"
                required
              ></input>
              <br />
              <label for="lname">Last Name:</label>
              <input
                type="text"
                id="lname"
                name="lname"
                className="lname"
                required
              ></input>
            </fieldset>
            <div className="pdetails-subform">
              <div className="pdetails-age">
                <label for="age" className="label-age">
                  Age:
                </label>
                <input
                  type="number"
                  name="age"
                  className="input-age"
                  id="age"
                  required
                  min="1"
                ></input>
              </div>
              <br />
              <div className="pdetails-national">
                <label for="nationality" className="label-national">
                  Nationality:
                </label>
                <select id="nationality" className="select-national">
                  <option value="Indian" selected>
                    Indian
                  </option>
                  <option value="American">American</option>
                  <option value="pakistani">Pakistani</option>
                  <option value="English">English</option>
                  <option value="Canadian">Canadian</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
