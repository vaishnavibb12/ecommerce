import React, { useState } from "react";
import "../css/Dataentry.css";
import flash from "../assets/flash1.png";
import data from "../Data";
import { ImCross } from "react-icons/im";
import { MdEdit } from "react-icons/md";
function Dataentry() {
  const [quantity, setQuantity] = useState(2);

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const [data, setItems] = useState([
    {
      id: 1,
      img: flash,
      content: "laptop",
      price: "$233",
      quantity: 3,
      total: "5667",
    },
    {
      id: 2,
      img: flash,
      content: "Monitor",
      price: "$113",
      quantity: 6,
      total: "6767",
    },
    {
      id: 3,
      img: flash,
      content: "CPU",
      price: "$133",
      quantity: 6,
      total: "6767",
    },
  ]);

  const [editedItem, setEditedItem] = useState({
    id: null,
    price: "$",
    quantity: "",
  });
  const deleteItem = (id) => {
    setItems((preventItem) => preventItem.filter((data) => data.id != id));
  };
  const handleInputChange = (e) => {
    const { price, quantity } = e.target;
    setEditedItem((prevItem) => ({ ...prevItem, [price]: quantity }));
  };
  const editItem = (item) => {
    setEditedItem(item);
  };
  const updateItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, ...editedItem } : item
      )
    );
    setEditedItem({ id: null, price: "", quantity: "" }); // Clear the edited item state
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
                <p>Id</p>
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
                <p>Delete</p>
              </div>
            </div>
            {data.map((item) => {
              return (
                <div className="bg-data">
                  <div className="cart-item">
                    <div className="item-id">{item.id}</div>
                    <div className="item-details">
                      <img src={item.img} alt="LCD Monitor" />
                      <div>{item.content}</div>
                    </div>
                    <div className="item-price">{item.price}</div>
                    <div class="quantity-selector">
                      <button class="btn-decrement" onClick={handleDecrement}>
                        -
                      </button>
                      <input type="text" value={quantity} readnly />
                      <button class="btn-increment" onClick={handleIncrement}>
                        +
                      </button>
                    </div>
                    <div className="item-price">{item.total}</div>
                    <div className="item delete">
                      <button onClick={() => deleteItem(item.id)}>
                        <ImCross />
                      </button>

                      <button onClick={() => editItem(item)}>
                        {" "}
                        <MdEdit />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            {editedItem.id && (
              <div>
                <h2>Edit Item</h2>
                <input
                  type="text"
                  name="name"
                  value={editedItem.price}
                  onChange={handleInputChange}
                  placeholder="Item Price"
                />
                <input
                  type="number"
                  name="value"
                  value={editedItem.quantity}
                  onChange={handleInputChange}
                  placeholder="Item Quantity"
                />
                <button onClick={() => updateItem(editedItem.id)}>
                  Update
                </button>
              </div>
            )}
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
