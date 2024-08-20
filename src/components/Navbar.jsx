import React, { useState } from "react";

import "../css/navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import numberCodeDb from "../Country.js";
import { FaCircleUser } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { TbShoppingCartStar } from "react-icons/tb";
import { ImCross } from "react-icons/im";
import { FaRegStar } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

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

      <div className="container">
        <div className="sec-nav">
          <div className="nav-bar">
            <div className="nav-img">
              <h1>Exclusive</h1>
            </div>

            <div className={`nav-links ${isOpen ? "active" : ""}`}>
              <ul className="list-icon">
                <li>
                  <Link to="home">Home</Link>
                </li>
                <li className="drop">
                  <Link to="about">About</Link>
                  <ul className="subdeopdown">
                    <li>
                      {" "}
                      <Link to="product">Product</Link>
                    </li>
                  </ul>
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
                  <Link to="story">Story</Link>
                </li>
              </ul>
            </div>

            <div className="nav-icons">
              <div className="sub-but">
                {/* <span>What are you looking for?</span> */}
                <select>
                  {numberCodeDb.map((item) => (
                    <option key={item.code} value={item.code}>
                      {item.code} ({item.label})
                    </option>
                  ))}
                </select>

                <CiSearch />
              </div>
              <CiHeart />
              <IoCartOutline />
              <div className="miniddrop">
                <FaCircleUser className="mini-drop" />
                <div className="drops">
                  <div className="down">
                    <FaRegUser />
                    <p>Manage My Account</p>
                  </div>
                  <div className="down">
                    <TbShoppingCartStar />
                    <p> My Order</p>
                  </div>{" "}
                  <div className="down">
                    <ImCross />
                    <p>My Cancellations</p>
                  </div>
                  <div className="down">
                    <FaRegStar />
                    <p>My Reviews</p>
                  </div>
                  <div className="down">
                    <CiLogout />
                    <p>Logout</p>
                  </div>
                </div>
              </div>
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
