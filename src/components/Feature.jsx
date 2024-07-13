import React from "react";
import "../css/featured.css";
import Spek from "../assets/spekers.png";
import lady from "../assets/lady.jpg";
import bass from "../assets/bass.png";
import { GrDeliver } from "react-icons/gr";

function Feature() {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 gh">
            <div className="flash">
              <div className="flash-center"></div>
            </div>
            <span>Features</span>
          </div>
          <div className="col-lg-12">
            <h1>New Arrival</h1>
          </div>
        </div>

        {/* image section */}

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="feature">
              <img src={Spek} alt="" />
              <div className="text-fea">
                <h5>Play Station 5</h5>
                <p>Black and White version of the PS5 coming out on sale.</p>
                <span className="sp-bu">Shop Now</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="feature1">
              <img src={lady} alt="" />
              <div className="text-fea1">
                <h5>Women’s Collections</h5>
                <p>
                  Featured woman collections <br />
                  that give you another vibe.
                </p>
                <span className="sp-bu">Shop Now</span>
              </div>
            </div>
            <div className="fggg">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="feature2">
                  <img src={bass} alt="" />
                  <div className="text-fea2">
                    <h5>Speakers</h5>
                    <p>Amazon wireless speakers</p>
                    <span className="sp-bu">Shop Now</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="feature3">
                  <img src={bass} alt="" />
                  <div className="text-fea3">
                    <h5>Speakers</h5>
                    <p>Amazon wireless speakers</p>
                    <span className="sp-bu">Shop Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* call us */}
        <div className="ghghg">
          <div className="row">
            <div className="col-lg-4">
              <div className="call">
                <div className="av-container">
                  <div className="av">
                    <GrDeliver />
                  </div>
                </div>
                <div className="av1">
                  <p>FREE AND FAST DELIVERY</p>
                  <span>Free delivery for all orders over $140</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="call">
                <div className="av-container">
                  <div className="av">
                    <GrDeliver />
                  </div>
                </div>
                <div className="av1">
                  <p>FREE AND FAST DELIVERY</p>
                  <span>Free delivery for all orders over $140</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="call">
                <div className="av-container">
                  <div className="av">
                    <GrDeliver />
                  </div>
                </div>
                <div className="av1">
                  <p>FREE AND FAST DELIVERY</p>
                  <span>Free delivery for all orders over $140</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
