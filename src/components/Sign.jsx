import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/Sign.css";

function Sign() {
  const [formData, setFormData] = useState({
    firstname: "",
    lasttname: "",
    email: "",
    password: "",
    newpassword: "",
    confirmpassword: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstname === "") {
      alert("Enter Name");
    } else if (formData.email === "") {
      alert("Please Enter Email");
    } else if (formData.password === "") {
      alert("Please Enter Password");
    } else if (formData.newpassword === "") {
      alert("Please Enter New Password");
    } else if (formData.confirmpassword === "") {
      alert("Please Enter Confirm Password");
    } else if (!formData.password) {
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
    } else {
      toast.success("Success Notification");
    }
  };

  console.log(formData);

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-3 sidebar">
            <h5>Manage My Account</h5>
            <a href="#" className="active">
              My Profile
            </a>
            <a href="#">Address Book</a>
            <a href="#">My Payment Options</a>
            <h5>My Orders</h5>
            <a href="#">My Returns</a>
            <a href="#">My Cancellations</a>
            <h5>My Wishlist</h5>
          </div>
          <div className="col-md-9 profile-form">
            <h3>Edit Your Profile</h3>
            <form id="contact-form" onSubmit={handleSubmit} method="POST">
              <div className="form-row">
                <div className="form-group col-md-5">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-5">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lasttname"
                    value={formData.lasttname}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row1">
                <div className="form-group col-md-5">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group col-md-5">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <h5>Password Changes</h5>
              <div className="form-group">
                <label>Current Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="newpassword"
                  value={formData.newpassword}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="confirmpassword"
                  value={formData.confirmpassword}
                  onChange={handleChange}
                />
              </div>
              <div className="end">
                <button type="button" className="btn btn-link">
                  Cancel
                </button>
                <button type="submit" className="btn btn-save">
                  Save Changes
                </button>
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;
