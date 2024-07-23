import React, { useState } from "react";

import "../css/navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="sub-action">
          <div className="action-bar">
            <span>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%! <span className="vb">Shop Now</span>
            </span>
          </div>
          <div className="right-action">
            <span>English</span>
            <RiArrowDropDownLine />
          </div>
        </div>
      </div>
      <div className="sec-nav">
        <div className="container">
          <div className="nav-bar">
            <div className="nav-img">
              <h1>Exclusive</h1>
            </div>

            <div className={`nav-links ${isOpen ? "active" : ""}`}>
              <ul className="list-icon">
                <li>
                  <Link to="home">Home</Link>
                </li>
                <li>
                  <Link to="about">About</Link>
                </li>
                <li>
                  <Link to="billing">Billing Details</Link>
                </li>

                <li>
                  <Link to="data">Data</Link>
                </li>
                <li>
                  <Link to="signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="product">Product</Link>
                </li>
              </ul>
            </div>

            <div className="nav-icons">
              <div className="sub-but">
                <span>What are you looking for?</span>
                <CiSearch />
              </div>
              <CiHeart />
              <IoCartOutline />
            </div>
            <div className="toogle" onClick={toggleNavbar}>
              <CiMenuBurger />
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}

      <div className={isOpen === true ? "moblileview" : "Disableview"}>
        {/* <div className="nav-img rt">
          <h1>Exclusive</h1>
        </div> */}

        {/* <div className="mobile-links">
          <ul className="list-icon">
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="billing">Billing Details</Link>
            </li>

            <li>
              <Link to="data">Data</Link>
            </li>
            <li>
              <Link to="signup">Sign Up</Link>
            </li>
            <li>
              <Link to="product">Product</Link>
            </li>
          </ul>
        </div> */}

        {/* <div className="mobile-icons">
          <div className="sub-but1">
            <span>What are you looking for?</span>
            <CiSearch />
          </div>
          <CiHeart />
          <IoCartOutline />
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
