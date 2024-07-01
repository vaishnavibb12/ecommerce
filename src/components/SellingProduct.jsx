import React from "react";
import "../css/sellingproduct.css";
import jacket from "../assets/jacket.png";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import speker from "../assets/speaker.png";

function SellingProduct() {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 gh">
              <div className="flash">
                <div className="flash-center"></div>
              </div>
              <span>This Month</span>
            </div>
            <div className="col-lg-12 fgh">
              <div className="col-lg-6 ghd">
                <h1>Best Selling Products</h1>
              </div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3">
                <div className="arrow">
                  <button>View All</button>
                </div>
              </div>
            </div>
          </div>

          {/* Selling product */}

          <div className="row">
            <div className="col-lg-3">
              <div className="flash-section">
                <img src={jacket} alt="" />

                <div className="sub1-flash">
                  <CiHeart className="bg" />
                  <IoEyeOutline className="bg1" />
                </div>
              </div>
              <div className="flash-head">
                <p>The North Coat</p>
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
                    <span>(65)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* full width Categories */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="main-cat">
              <div className="col-lg-6">
                <div className="right-cat">
                  <img src={speker} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="left-cat">
                  <div className="left1">
                    <span className="fg"> Categories</span>
                    <h1>
                      Enhance Your <br /> Music Experience
                    </h1>
                    <div className="time">
                      <div className="ths">
                        <h2>23</h2>
                        <span className="hjs">HOURS</span>
                      </div>
                      <div className="ths">
                        <h2>05</h2>
                        <span className="hjs">DAYS</span>
                      </div>
                      <div className="ths">
                        <h2>59</h2>
                        <span className="hjs">MINUTES</span>
                      </div>
                      <div className="ths">
                        <h2>35</h2>
                        <span className="hjs">SECONDS</span>
                      </div>
                    </div>

                    <div className="button1">
                      <button>Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellingProduct;
