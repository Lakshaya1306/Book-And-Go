import React, { useContext, useState } from "react";
import "./Upper.css";
import { useNavigate } from "react-router-dom";
import { Mynav } from "./Nav/Nav";
import { CategoryContext } from "./categorycontext";
export function Up() {
  const sources = ["New-Delhi", "Bangalore", "Mumbai"];
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  const context = useContext(CategoryContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(
      `/${context?.category}?source=${source}&destination=${destination}&date=${date}`
    );
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };
  return (
    <React.Fragment>
      <div className={`Main ${showLogin ? "blur-background" : ""}`}>
        <div className="Nav">
          <Mynav />
        </div>
        <div className="Heading">
          <p>DISCOVER THE</p>
          <p>WORLD</p>
          <p>WITH US</p>
        </div>
        <div className="form">
          <form className="form2" onSubmit={handleSubmit}>
            <input
              list="source"
              name="source"
              id="s1"
              placeholder="Source.."
              required
              value={source}
              onChange={(e) => {
                setSource(e.target.value);
              }}
            />
            <datalist id="source">
              {sources.map((element) => {
                return (
                  <>
                    <option value={element} />
                  </>
                );
              })}
            </datalist>
            <input
              list="Destination"
              name="Destination"
              id="s1"
              placeholder="Destination.."
              required
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
            />
            <datalist id="Destination">
              {sources.map((element) => {
                return (
                  <>
                    <option value={element} />
                  </>
                );
              })}
            </datalist>
            <input
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              required
            />
            <button type="submit">
              <span className="submit-span">Search</span>
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
