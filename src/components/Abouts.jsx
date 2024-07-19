import React, { useState } from "react";
// import con from "../assets/contact.jpg";
// import { RiEyeCloseFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/Contact.css";
import { FaGoogle } from "react-icons/fa";

function Abouts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const notify = () => {
    toast.success("Success Notification!");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name === "") {
    } else if (formData.email === "") {
      alert("Please Enter Email");
    } else if (formData.password === "") {
      alert("Please Enter Password");
    } else {
      const errors = validate();
      if (Object.keys(errors).length === 0) {
        console.log("Form data:", formData);
      } else {
        setErrors(errors);
      }
    }
  };

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
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                {/* <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  name="Message"
                  value={Message}
                  onChange={Handlesubmit}
                />
              </div> */}
                <button
                  type="submit"
                  className="btn btn-light"
                  onClick={notify}
                >
                  Submit
                </button>
                <ToastContainer />
              </form>
              <div className="but">
                <button type="button" class="btn btn-primary">
                  Create Account
                </button>
                <div className="fg">
                  <button type="button" class="btn btn-light">
                    <FaGoogle /> Sign Up With Google
                  </button>
                </div>
              </div>
              <div className="but1">
                <p>
                  Already Have Account? <span> Log In</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Abouts;
