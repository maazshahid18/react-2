import React from "react";
import icon from "./icon.png";
import engine from "./engine.png";

const Secondcard = () => {
  return (
    <div>
      <div className="specs">
        <h3 className="heading">Honda Amaze 2021 Specification</h3>
        <div className="details">
          <div className="topitems">
            <div className="mile">
              <img src={icon} alt="icon"></img>
              Mileage
              <span className="num">
                <br></br>
                <b>17-20</b>
              </span>
            </div>
            <div className="Fuel">
              <img src={icon} alt="icon"></img>
              Fuel
              <span className="num2">
                <br></br>

                <b>22.63 kmpl</b>
              </span>
            </div>
          </div>
          <div className="bottomitems">
            <div className="engine">
              <img src={engine} alt="engine"></img>
              Engine
              <br></br>
              <b>1197-1498cc</b>
            </div>
            <div className="trans">
              <img src={engine} alt="transmission"></img>
              Transmission<br></br>
              <b>Manual/Automatic</b>
            </div>
          </div>
        </div>
        <div className="viewspec">
          <p>
            <a className="viewspec" href="View specifications">
              {" "}
              View More specifications
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Secondcard;
