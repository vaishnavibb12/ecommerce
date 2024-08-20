import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/Contact.css";
import { FaGoogle } from "react-icons/fa";

import numberCodeDb from "../Country.js";

import Model from "./Model.jsx";

function Abouts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const handleChange = (e) => {
    // const [errors, setErrors] = useState({});
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    return errors;
  };

  // const notify = () => {
  //   toast.success("Success Notification!");
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name === "") {
      alert("Enter Name");
    } else if (formData.email === "") {
      alert("Please Enter Email");
    } else if (formData.password === "") {
      alert("Please Enter Password");
    } else if (!formData.password) {
      alert("Password is required");
    } else if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long");
    } else if (!/[A-Z]/.test(formData.password)) {
      alert("Password must contain at least one uppercase letter");
    } else if (!/[a-z]/.test(formData.password)) {
      alert("Password must contain at least one lowercase letter");
    } else if (!/[0-9]/.test(formData.password)) {
      alert("Password must contain at least one number");
    } else if (!/[!@#$%^&*]/.test(formData.password)) {
      alert("Password must contain at least one special character");
    } else {
      toast.success("Success Notification");
    }
  };
  console.log(formData);

  const [openModal, setOpenModel] = useState(false);

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-12">
              <div className="cont-us">{/* <img src={con} alt="" /> */}</div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <h2>Create an Account</h2>
              <p>Enter Your Details</p>
              <form id="contact-form" onSubmit={handleSubmit} method="POST">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                {/* {numberCodeDb.map((item) => {
                  return ( */}
                <div className="form-group">
                  <label>Phone Number:</label>

                  <div className="kl">
                    <select>
                      {numberCodeDb.map((item) => (
                        <option key={item.code} value={item.code}>
                          {item.code} ({item.phone})
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      id="phone"
                      // value={formData.phone}
                      // onChange={handlePhoneChange}
                      maxLength="10"
                      className="phone-input"
                    />
                  </div>
                </div>
                {/* );
                })} */}
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-light">
                  Submit
                </button>
                <ToastContainer />
              </form>

              <div className="but">
                <button
                  class="btn btn-primary"
                  onClick={() => {
                    setOpenModel(true);
                  }}
                >
                  {" "}
                  Create Account{" "}
                </button>
                {openModal && <Model closModel={setOpenModel} />}
              </div>
              <div className="fg">
                <button type="button" class="btn btn-light">
                  <FaGoogle /> Sign Up With Google
                </button>
              </div>

              <div className="but1">
                <p>Already Have Account? </p>
                Log In
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Abouts;
