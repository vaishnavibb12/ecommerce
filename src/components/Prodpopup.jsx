import React from "react";
import { FaStar } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import flash from "../assets/flash1.png";
import { ImCross } from "react-icons/im";

function Prodpopup({ closeProdpopup }) {
  return (
    <div className="popup-cont">
      <div className="model-container">
        <div className="product-card">
          <div className="togg" onClick={() => closeProdpopup(false)}>
            <ImCross />
          </div>
          <div className="product-image">
            <img src={flash} alt="" />
          </div>
          <div className="product-details">
            <h2 className="product-title">JBL Over-Ear Wireless Headphones</h2>
            <div className="sunstar">
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="product-brand">
              Brand: <strong>JBL</strong>
            </p>
            <p className="product-code">
              Product Code: <strong>007</strong>
            </p>
            <p className="product-availability">
              Availability: <strong>In Stock</strong>
            </p>
            <p className="product-price">$98.00</p>
            <span className="original-price">$200.00 </span>{" "}
            <p className="product-discount">You save 31%</p>
            <div className="product-actions">
              <button className="save-button">+ Save</button>
              <button className="buy-button">BUY NOW</button>
            </div>
            <p className="product-description">
              Experience premium sound quality with JBL’s wireless over-ear
              headphones. With a comfortable fit, long battery life, and
              crystal-clear audio, these headphones are perfect for music lovers
              and audiophiles alike.
            </p>
            <p className="social-icon">
              <BsFacebook />
              <FaSquareInstagram />
              <FaTwitter />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prodpopup;
