import React from "react";
import "./signup.css";

export function Mysignup() {
  return (
    <React.Fragment>
      <form>
        <div className="email-div">
          <label className="input-label" for="email-id">
            Email
          </label>
          <input
            type="email"
            id="email-id"
            name="email-id"
            placeholder="Enter Email"
            className="input-content-email"
          ></input>
          <br />
        </div>
        <div className="up-password-div">
          <label className="input-label" for="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            required
            className="up-input-content"
          ></input>
        </div>
      </form>
    </React.Fragment>
  );
}
