import React, { useState } from "react";
import "../css/Coupen.css";

function Coupencode() {
  const [isOpen, setIsOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const handleToggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setCouponCode(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle coupon code submission logic here
    alert(`Coupon code submitted: ${couponCode}`);
    setCouponCode("");
    setIsOpen(false);
  };

  return (
    <div className="coupon-section">
      <button>Apply Coupon Code</button>
      {isOpen && (
        <div className="coupon-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="code">Enter your coupon code:</label>
            <input
              type="text"
              id="code"
              value={couponCode}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
          <button onClick={handleToggleForm}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Coupencode;
