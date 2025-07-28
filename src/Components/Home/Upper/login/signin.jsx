import React from "react";
import "./signin.css";

export function Mysignin() {
  return (
    <React.Fragment>
      <form>
        <div className="username-div">
          <label className="input-label" for="username-id">
            Username
          </label>
          <input
            type="username"
            id="username-id"
            name="username-id"
            placeholder="Enter username"
            className="input-content-user"
          ></input>
          <br />
        </div>
        <div className="password-div">
          <label className="input-label" for="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            required
            className="input-content"
          ></input>
        </div>
      </form>
    </React.Fragment>
  );
}
