import React, { useState } from "react";
import "../css/Flashpro.css";
import pt from "../assets/remote1.png";
import pt1 from "../assets/remote.png";
import { CiHeart } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { GiRecycle } from "react-icons/gi";
function Flashpro() {
  const [quantity, setQuantity] = useState(2);

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="acor">
              <p>Account /</p>
              <p>Gamming /</p>
              <p>Havic HV G-92 Gamepad /</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 col-sm-12">
            <div className="pro-img">
              <img src={pt} alt="" />
              <img src={pt} alt="" />
              <img src={pt} alt="" />
              <img src={pt} alt="" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="img2">
              <img src={pt1} alt="" />
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <h1 className="product-title">Havic HV G-92 Gamepad</h1>
            <div className="rating">
              <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
              <span>(150 Reviews)</span>
            </div>
            <div className="price mt-2">$192.00</div>
            <p className="mt-2 small-text df">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal.
              Pressure sensitive.
            </p>
            <div className="radio mt-2">
              <h6>Colours:</h6>
              <div className="active">
                <label>
                  <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                  />
                </label>
                <label>
                  <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleOptionChange}
                  />
                </label>
              </div>
            </div>
            <div className="label mt-2">
              <h6>Size:</h6>
              <div className="lab">
                {/* <label>
                  <input name="size" id="sizeXS" autocomplete="off" />
                  XS
                </label>
                <label>
                  <input name="size" id="sizeS" autocomplete="off" />S
                </label>
                <label>
                  <input name="size" id="sizeM" autocomplete="off" checked /> M
                </label>
                <label>
                  <input name="size" id="sizeL" autocomplete="off" />L
                </label>
                <label>
                  <input name="size" id="sizeXL" autocomplete="off" />
                  XL
                </label> */}

                <p>XS</p>
                <p>S</p>
                <p>L</p>
                <p>XL</p>
                <p>M</p>
              </div>
            </div>
            <div className="fghj">
              <div class="quantity-selector">
                <button class="btn-decrement" onClick={handleDecrement}>
                  -
                </button>
                <input type="text" value={quantity} readnly />
                <button class="btn-increment" onClick={handleIncrement}>
                  +
                </button>
              </div>

              <button className="btn btn-danger btn-block">Buy Now</button>

              <CiHeart />
            </div>
            <div className="style">
              <div className="asd mt-3">
                <TbTruckDelivery />
                <p className="we small-text">
                  <strong>Free Delivery</strong>
                  <br />
                  Enter your postal code for Delivery Availability
                </p>
              </div>

              <div className="asd mt-3">
                <GiRecycle />
                <p className="we small-text">
                  <strong>Return Delivery</strong>
                  <br />
                  30 Days Delivery Returns. <a href="/data">Details</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashpro;
