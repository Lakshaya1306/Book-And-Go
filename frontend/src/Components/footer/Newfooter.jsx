import React from "react";
import { Link } from "react-router-dom";
import "./Newfooter.css";
const NewFooter = () => {
  return (
    <div className="footerParent">
      <div className="leftf">
        <ul className="test">
          <li className="footer-li">
            <Link to="/about">About Us</Link>
          </li>
          <li className="footer-li">
            <Link to="/FAQs">FAQs</Link>
          </li>
          <li className="footer-li">
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li className="footer-li">
            <Link to="/careers">Career</Link>
          </li>
        </ul>
      </div>
      <div className="rightf">
        <i
          class="fa-brands fa-instagram"
          onClick={() => {
            window.open(
              "https://www.instagram.com/_lakshay_mehta04/",
              "_blank"
            );
          }}
        ></i>
        <i
          class="fa-brands fa-youtube"
          onClick={() => {
            window.open(
              "https://www.youtube.com/channel/UCSUegRgX-lQRMU81nuVzDQw",
              "_blank"
            );
          }}
        ></i>
        <i
          class="fa-brands fa-linkedin-in"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/lakshaya-mehta-92518323a/",
              "_blank"
            );
          }}
        ></i>
        <i
          class="fa-brands fa-github"
          onClick={() => {
            window.open("https://github.com/Lakshaya1306", "_blank");
          }}
        ></i>
      </div>
    </div>
  );
};

export default NewFooter;
