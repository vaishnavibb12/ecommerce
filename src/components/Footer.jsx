import React, { useState } from "react";
import "../css/Footer.css";
import { IoSendSharp } from "react-icons/io5";
import qr from "../assets/qr.jpg";
import gp from "../assets/gp.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import languages from "../Language";

function Footer() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].code);

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  return (
    <div className="section sec-fluid">
      <div className="container">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-2 col-md-2 col-sm-2 text-white bhj">
            <h5 className="fggh">Exclusive</h5>
            <h6>Subscribe</h6>
            <span className="fr">Get 10% off your first order</span>

            <div className="hjk">
              <button className="bn">
                Enter Your Email
                <IoSendSharp />
              </button>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2  text-white bhj">
            <h5 className="fggh">Support</h5>

            <span className="fr">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </span>
            <br />
            <span className="fr">exclusive@gmail.com</span>
            <br />
            <span className="fr">+88015-88888-9999</span>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2  text-white bhj">
            <h5 className="fggh">Account</h5>
            <ul className="ghh">
              <li>MY Account</li>
              <li>Log</li>
              <li>Cart</li>
              <li>Shop</li>
              <li>Wishlist</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2  text-white bhj">
            <h5 className="fggh">Qucik Links</h5>
            <ul className="ghh">
              <li>MY Account</li>
              <li>Log</li>
              <li>Cart</li>
              <li>Shop</li>
              <li>Wishlist</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-2  text-white bhj">
            <h5 className="fggh">Download App</h5>

            <span className="fr">Save $3 with App New User Only</span>
            <div className="memo">
              <div className="qr">
                <img src={qr} alt="" />
              </div>
              <div className="gp">
                <img src={gp} alt="" />
                <img src={gp} alt="" />
              </div>
            </div>
            <div className="icon">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="bmv">
          <div className="row">
            <div className="col-lg-12">
              <p>Copyright 2024 |All right reserved</p>
            </div>
            <div className="col-lg-12">
              <button type="button" class="btn btn-outline-info">
                Select Languages &nbsp;
                <select value={selectedLanguage} onChange={handleChange}>
                  {languages.map((item) => (
                    <option key={item.code} value={item.code}>
                      {item.code} ({item.name})
                    </option>
                  ))}
                </select>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
