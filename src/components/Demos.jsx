import React from "react";
import "../css/demo.css";
import speker from "../assets/speaker.png";

function Demos() {
  return (
    <div className="section">
      <div className="container">
        <div className="ghgj">
          <div className="text-section">
            <p>Categories</p>
            <h1>Enhance Your Music Experience</h1>
            <div class="countdown">
              <div>
                <span>23</span>
                <br />
                Hours
              </div>
              <div>
                <span>05</span>
                <br />
                Days
              </div>
              <div>
                <span>59</span>
                <br />
                Minutes
              </div>
              <div>
                <span>35</span>
                <br />
                Seconds
              </div>
            </div>
            <button class="button">Buy Now!</button>
          </div>
          <div class="image-section">
            <img src={speker} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demos;
