import React, { useRef, useState } from "react";
import "./login.css";
import img1 from "../login/googleicon.png";
import img2 from "../login/facebook-icon.png";
import img3 from "../login/apple-icon.png";
import { Mysignup } from "./signup";
import { Mysignin } from "./signin";
export function Mylogin() {
  const signInRef = useRef(null);
  const signUpRef = useRef(null);

  const [dynamicClassName, setDynamicClassName] = useState("active");

  const handleClickUser = () => {
    setDynamicClassName("active");
  };

  const handleClickUserSignIn = () => {
    setDynamicClassName("active-box");
  };
  return (
    <React.Fragment>
      <div className="login-main">
        <div className="login-img">
          <div className="img-absolute"></div>
        </div>
        <div className="login-content">
          <div className="login-upper">
            <div className="sign-up-in">
              <div
                ref={signUpRef}
                onClick={handleClickUser}
                className={
                  dynamicClassName === "active"
                    ? "active content sign-up"
                    : "content-sign-up"
                }
              >
                Sign Up
              </div>
              <div
                ref={signInRef}
                onClick={handleClickUserSignIn}
                className={
                  dynamicClassName === "active-box"
                    ? "active content-sign-in"
                    : "content-sign-in"
                }
              >
                Sign In
              </div>
            </div>
            <div className="login-form-main">
              <div className="login-form-outer">
                <div className="login-form">
                  <div className="login-form-inner">
                    {dynamicClassName === "active" ? (
                      <Mysignup />
                    ) : (
                      <Mysignin />
                    )}
                  </div>
                </div>
              </div>
              <div className="login-continue">Continue</div>
            </div>
          </div>
          <div className="login-bottom">
            <div className="login-style">
              <div className="login-border"></div>
              <div className="log-or-sign">or log-in/sign-up with</div>
              <div className="login-border"></div>
            </div>
            <div className="login-bottom-content">
              <div className="bottom-img">
                <img src={img1} alt="google" width="105%" height="105%"></img>
              </div>
              <div className="bottom-img">
                <img src={img2} alt="facebook" width="100%" height="95%"></img>
              </div>
              <div className="bottom-img">
                <img src={img3} alt="apple" width="80%" height="100%"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
