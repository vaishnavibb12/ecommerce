import React, { useState } from "react";
import "../css/Billingdetail.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import flash from "../assets/flash1.png";
import bd from "../assets/brand.png";
import Log from "./Log.jsx";
function BillingDetails() {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    password: "",
    companyname: "",
    streetaddress: "",
    streetaddress1: "",
    streetaddress2: "",
    phone: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.firstname) errors.firstname = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    } else if (!/[A-Z]/.test(formData.password)) {
      errors.password = "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(formData.password)) {
      errors.password = "Password must contain at least one lowercase letter";
    } else if (!/[0-9]/.test(formData.password)) {
      errors.password = "Password must contain at least one number";
    } else if (!/[!@#$%^&*]/.test(formData.password)) {
      errors.password = "Password must contain at least one special character";
    }

    return errors;
  };
  // const notify = () => {};
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name === "") {
    } else if (formData.email === "") {
      alert("Please Enter Email");
    } else if (formData.password === "") {
      alert("Please Enter Password");
    } else {
      toast.success("Success Notification!");
    }
  };

  const [logModel, setlogModel] = useState(false);
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="acor">
              <p>Account /</p>
              <p>My Account /</p>
              <p>Product /</p>
              <p>View Cart /</p>
              <p>Checkout /</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h2>Billing Details</h2>
            <form id="contact-form" onSubmit={handleSubmit} method="POST">
              <div className="form-group">
                <label>First Name*</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Company Name*</label>
                <input
                  type="text"
                  className="form-control"
                  name="companyname"
                  value={formData.companyname}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Street address*</label>
                <input
                  type="text"
                  className="form-control"
                  name="streetaddress"
                  value={formData.streetaddress}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Apartment, floor, etc. (optional)</label>
                <input
                  type="text"
                  className="form-control"
                  name="streetaddress1"
                  value={formData.streetaddress1}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Town/City*</label>
                <input
                  type="text"
                  className="form-control"
                  name="streetaddress2"
                  value={formData.streetaddress2}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Password*</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Phone*</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email Address*</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-light">
                Submit
              </button>
              <ToastContainer />
            </form>
            <div className="check">
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                  />
                  &nbsp; Save this information for faster check-out next time
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-md-12 col-sm-12"></div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="right">
              <div className="right-side">
                <div className="right1">
                  <img src={flash} alt="" />
                  <p>LCD Monitor</p>
                </div>
                <p>$650</p>
              </div>
              <div className="right-side">
                <div className="right1">
                  <img src={flash} alt="" />
                  <p>LCD Monitor</p>
                </div>
                <p>$650</p>
              </div>
              <div className="right-sides">
                <div className="right2">
                  <p>Subtotal:</p>
                  <p>$1250</p>
                </div>
              </div>
              <div className="right-sides">
                <div className="right2">
                  <p>Shipping :</p>
                  <p>$1250</p>
                </div>
              </div>
              <div className="right-sides">
                <div className="right2">
                  <p>Total :</p>
                  <p>$1250</p>
                </div>
              </div>
              <div className="right-side">
                <div className="left1">
                  <p>
                    <input type="radio" />
                  </p>
                  <p>Bank</p>
                </div>
                <div className="ig">
                  <img src={bd} alt="" />
                  <img src={bd} alt="" />
                  <img src={bd} alt="" />
                </div>
              </div>
              <div className="right-side">
                <div className="left1">
                  <p>
                    <input type="radio" />
                  </p>
                  <p>Cash Delivery</p>
                </div>
              </div>
              <div className="right-side">
                <div className="left1">
                  <button type="button" class="btn btn-light">
                    Coupon Code
                  </button>
                  <button
                    class="btn btn-primary"
                    onClick={() => {
                      setlogModel(true);
                    }}
                  >
                    Apply Coupon
                  </button>
                  {logModel && <Log closeModel={setlogModel} />}
                </div>
              </div>
              <div className="right-side">
                <div className="left1">
                  <button type="button" class="btn btn-danger">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-md-6 col-sm-12"></div>
        </div>
      </div>
    </div>
  );
}

export default BillingDetails;
