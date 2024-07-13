import React from "react";
import "../css/sellingproduct.css";
import jacket from "../assets/jacket.png";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

import sellingp from "../SellingProduct";

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
          </div>
          <div className="row">
            <div className="honda">
              <div className="col-lg-6">
                <h1>Best Selling Products</h1>
              </div>

              <div className="col-lg-6">
                <div className="arrow">
                  <button>View All</button>
                </div>
              </div>
            </div>
          </div>

          {/* Selling product */}

          <div className="row">
            {sellingp.map((item) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="flash-section">
                    <img src={jacket} alt="" />

                    <div className="sub1-flash">
                      <CiHeart className="bg" />
                      <IoEyeOutline className="bg1" />
                    </div>
                  </div>
                  <div className="flash-head">
                    <p>{item.title}</p>
                    <div className="head1">
                      <span>${item.price}</span>
                      <span className="cut">{item.cutprice}</span>
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
                        <span>({item.bracketvalue})</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SellingProduct;
