import React from "react";
import "../css/flashsale.css";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import flash from "../assets/flash1.png";
import { FaStar } from "react-icons/fa";

function Flashsale() {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 gh">
            <div className="flash">
              <div className="flash-center"></div>
            </div>
            <span>Today's</span>
          </div>
          <div className="col-lg-12 fgh">
            <div className="col-lg-3">
              <h1>Flash Sales</h1>
            </div>
            <div className="col-lg-6">
              <div className="times">
                <ul className="list-icons">
                  <li>DAYS</li>
                  <li>HOURS</li>
                  <li>MINUTES</li>
                  <li>SECONDS</li>
                </ul>
                <div className="hours">
                  <ul className="list-icondd">
                    <li>
                      <h2>03</h2>
                    </li>
                    <li>:</li>
                    <li>
                      <h2>23</h2>
                    </li>
                    <li>:</li>
                    <li>
                      <h2>30</h2>
                    </li>
                    <li>:</li>
                    <li>
                      <h2>56</h2>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="arrow">
                <FaRegArrowAltCircleLeft />
                <FaRegArrowAltCircleRight />
              </div>
            </div>
          </div>
        </div>

        {/* flashbox */}
        <div className="row">
          <div className="col-lg-3">
            <div className="flash-section">
              <img src={flash} alt="" />
              <div className="sub-flash">
                <span>-40%</span>
              </div>
              <div className="sub1-flash">
                <CiHeart className="bg" />
                <IoEyeOutline className="bg1" />
              </div>
            </div>
            <div className="cart">
              <span>Add to Cart</span>
            </div>
            <div className="flash-head">
              <div className="head1">
                <span>$120</span>
                <span className="cut">$160</span>
              </div>
              <div className="head2">
                <div className="sd">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="df">
                  <span>(88)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashsale;
