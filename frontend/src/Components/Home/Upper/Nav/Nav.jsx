import React, { useContext, useState } from "react";
import img from "./Logo.png";
import "./Nav.css";
import { Link } from "react-router-dom";
import { CategoryContext } from "../categorycontext";
import { Mylogin } from "../login/login";
export function Mynav() {
  const context = useContext(CategoryContext);
  const [showPopup, setShowPopup] = useState(false);

  const handleCategoryChange = (category) => {
    context.setCategory(category);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="Left">
          <div className="Logo">
            <img
              src={img}
              alt="Brand Logo"
              width={"90%"}
              height={"100%"}
              id="a1"
            ></img>
          </div>
          <div className="content">
            <ul className="nav-left">
              <li
                className={`nav-left-item ${
                  context.category === "flights" ? "active" : ""
                }`}
                id="flight"
                onClick={() => handleCategoryChange("flights")}
              >
                <Link to="/">Flights</Link>
              </li>
              <li
                className={`nav-left-item ${
                  context.category === "trains" ? "active" : ""
                }`}
                id="train"
                onClick={() => handleCategoryChange("trains")}
              >
                <Link to="/">Trains</Link>
              </li>
              <li
                className={`nav-left-item ${
                  context.category === "buses" ? "active" : ""
                }`}
                id="bus"
                onClick={() => handleCategoryChange("buses")}
              >
                <Link to="/">Buses</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="Right">
          <div className="offer">
            <i class="fa-solid fa-envelope-open-text"></i>
            <p>Offers</p>
          </div>
          <div className="customer">
            <i class="fa-solid fa-headset"></i>
            <p>Customer Support</p>
            <div className="nav-dropdown">
              <ul className="nav-ul">
                <li className="nav-li">
                  <div className="nav-li-content">
                    <div className="nav-li-content-icon">
                      <i class="fa-solid fa-phone icon-call" id="nav-icon1"></i>
                    </div>
                    <div className="nav-li-content-detail">123456xxxx</div>
                  </div>
                </li>
                <li className="nav-li">
                  <div
                    className="nav-li-content"
                    onClick={() => {
                      window.open("mailto:customersupport@gmail.com");
                    }}
                  >
                    <div className="nav-li-content-icon">
                      <i class="fa-solid fa-envelope icon-call"></i>
                    </div>
                    <div className="nav-li-content-detail">
                      customersupport@gmail.com
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="login" onClick={togglePopup}>
            <i class="fa-solid fa-user"></i>
            <p>Login</p>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <Mylogin />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
