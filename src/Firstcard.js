import React from "react";
import star from "./star.png";

const Firstcard = () => {
  return (
    <div>
      <div className="maincard">
        <div className="carcard">
          <img src="https://images.91wheels.com//assets/b_images/main/models/profile/profile1629346089.png?width=360"></img>
        </div>

        <div className="textarea">
          <span>
            <h2> Honda Amaze 2021</h2>
            <p className="star">
              <img src={star} alt="star"></img>
              <img src={star} alt="star"></img>
              <img src={star} alt="star"></img>
              <img src={star} alt="star"></img>
              <span>
                <u>190 ratings/15 answered questions</u>
              </span>
            </p>
          </span>

          <p className="price">₹ 6.32 - 11.50 Lakhs*</p>
          <p className="showroom">
            *Ex-showroom price in{" "}
            <strong>
              <a href=" New Delhi">New Delhi</a>
            </strong>
          </p>
          <div>
            <button className="bun">View Festive offers</button>
            <button className="bun bun2">Contact Dealers</button>
          </div>
          <div className="offer">
            <p> Offer expires in 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstcard;
