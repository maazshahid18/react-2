import React from "react";
import thumbup from "./thumbup.png";
import td from "./td.png";

const thirdcard = () => {
  return (
    <div>
      <div className="thirdbox">
        <h3 className="head3">
          91Wheels Expert Opinion about Honda Amaze 2021
        </h3>

        <div className="features">
          <span>
            <img className="thum" src={thumbup} alt="thumbs"></img>
            <b> Features we admire in this car</b>
          </span>
          <div className="points1">
            <ul className="greenpointer">
              <li><span className="dot"></span>he best looking hatchbacks ever</li>
              <br></br>
              <li>Rides like a bigger vehicle-comfortable</li>
              <br></br>
              <li>India's safest hatchback</li>
              <br></br>
            </ul>
          </div>

          <div className="notgood">
            <span>
              <img className="thumbd" src={td} alt="thumbsd"></img>
              <b> Features we dont admire in this car</b>
            </span>
            <div className="points2">
              <ul>
                <li>India's safest hatchback</li>
                <br></br>
                <li>Rides like a bigger vehicle-comfortable</li>
                <br></br>
                <li>One of the best looking hatchbacks ever</li>
                <br></br>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default thirdcard;
