import React from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "../css/categories.css";
import { IoIosPhonePortrait } from "react-icons/io";
function Categories() {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 gh">
            <div className="flash">
              <div className="flash-center"></div>
            </div>
            <span>Categories</span>
          </div>
          <div className="col-lg-12 fgh">
            <div className="col-lg-6 ghd">
              <h1>Browse By Category</h1>
            </div>
            <div className="col-lg-3"></div>
            <div className="col-lg-3">
              <div className="arrow">
                <FaRegArrowAltCircleLeft />
                <FaRegArrowAltCircleRight />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2">
            <div className="category">
              <div className="sub-cat">
                <IoIosPhonePortrait />
                <span className="sec">Phones</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
