import React, { useState } from "react";
import "../css/Dataentry.css";
import flash from "../assets/flash1.png";
import data from "../Data";

function Dataentry() {
  const [quantity, setQuantity] = useState(2);

  const handleDecrement = (item) => {
    console.log(item);
    if (quantity > min) {
      setQuantity(item.quantity - 1);
    }
  };

  const handleIncrement = (item) => {
    if (quantity < max) {
      setQuantity(item.quantity + 1);
    }
  };
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-12 col-sm-12"></div>
          <div className="col-lg-10 col-md-12 col-sm-12">
            <div className="acor">
              <p>Home /</p>
              <p>Cart</p>
            </div>
          </div>
          <div className="col-lg-1 col-md-12 col-sm-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-1 col-md-12 col-sm-12"></div>
          <div className="col-lg-10 col-md-12 col-sm-12">
            <div className="bg-data">
              <div className="entry">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
              </div>
            </div>
            {data.map((item) => {
              return (
                <div className="bg-data">
                  <div className="cart-item">
                    <div className="item-details">
                      <img src={item.img} alt="LCD Monitor" />
                      <div>{item.content}</div>
                    </div>
                    <div className="item-price">{item.price}</div>
                    <div class="quantity-selector">
                      <button
                        className="btn-decrement"
                        onClick={() => handleDecrement(item)}
                      >
                        -
                      </button>
                      <input type="text" value={item.quantity} readOnly />
                      <button
                        className="btn-increment"
                        onClick={() => handleIncrement(item)}
                      >
                        +
                      </button>
                    </div>
                    <div className="item-price">{item.total}</div>
                  </div>
                </div>
              );
            })}
            <div className="butt">
              <button type="button" class="btn btn-light">
                Return To Shop
              </button>
              <button type="button" class="btn btn-light">
                Update Cart
              </button>
            </div>
          </div>

          <div className="col-lg-1 col-md-12 col-sm-12"></div>
        </div>
        <div className="sec">
          <div className="row">
            <div className="col-lg-1 col-md-12 col-sm-12"></div>
            <div className="col-lg-6 col-md 12 col-sm-12">
              <div className="butt1">
                <button type="button" class="btn btn-light">
                  Coupon Code
                </button>
                <button type="button" class="btn btn-danger">
                  Apply Coupon
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md 12 col-sm-12">
              <div className="cart-total">
                <h6>Cart Total</h6>
                <div className="bn">
                  <span>Subtotal:</span>
                  <span>$1750</span>
                </div>
                <div className="bn">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="total">
                  <span>Total:</span>
                  <span>$1750</span>
                </div>
                <button class="checkout-btn">Proceed to checkout</button>
              </div>
            </div>
            <div className="col-lg-1 col-md-12 col-sm-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dataentry;
