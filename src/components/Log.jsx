import React, { useState } from "react";
import { ImCross } from "react-icons/im";

function Log({ closeModel }) {
  const [formData, setFormData] = useState({
    email: "",
    Password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email === "") {
      alert("Enter Email");
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
    <div className="modelbackground1">
      <div className="modelcontainer">
        {/* <div className="create-account-form"> */}
        <form onSubmit={handleSubmit} method="POST">
          <h6>Log in to Exclusive</h6>
          <div className="tog" onClick={() => closeModel(false)}>
            <ImCross />
          </div>
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
          <br />
          <button type="submit" class="btn btn-primary">
            Log In
          </button>
        </form>
      </div>
    </div>
    // </div>
  );
}

export default Log;
