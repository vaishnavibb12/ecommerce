import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/slider.css";
import { TbMathGreater } from "react-icons/tb";
import apple from "../assets/apple.png";
import { FaArrowRight } from "react-icons/fa";
import applephone from "../assets/apple-phone-removebg-preview.png";
import { GoDotFill } from "react-icons/go";
function Slider() {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-md-4 col-lg-3">
            <ul className="list-icon1">
              <div className="vb12">
                <li className="li">Woman’s Fashion </li> <TbMathGreater />
              </div>

              <div className="vb1">
                <li className="li">Men’s Fashion</li>
                <TbMathGreater />
              </div>

              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby’s & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </div>
          <div className="col-sm-9 col-md-8 col-lg-9 bnd">
            <div className="right-slider">
              <div className="col-sm-6 col-md-6 col-lg-6">
                <div className="slider-type">
                  <div className="sub-slide">
                    <img src={apple} alt="" />
                    <span>iPhone 14 Series</span>
                  </div>
                  <div className="sub-two">
                    <h1>
                      Up to 10% <br />
                      off Voucher
                    </h1>
                  </div>
                  <div className="sub-three">
                    <span>Shop Now</span>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6">
                <div className="slider-type1">
                  <img src={applephone} alt="" />
                </div>
              </div>
            </div>
            <div className="dots">
              <GoDotFill />
              <GoDotFill />
              <GoDotFill className="fgd" />
              <GoDotFill />
              <GoDotFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
