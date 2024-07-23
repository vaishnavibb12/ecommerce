import React, { useState } from "react";
import { ImCross } from "react-icons/im";

function Model({ closModel }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name === "") {
      alert("Enter Name");
    } else if (formData.email === "") {
      alert("Please Enter Email");
    } else {
      toast.success("Success Notification");
    }
  };
  console.log(formData);

  return (
    <div className="modelbackground">
      <div className="modelcontainer">
        {/* <div className="create-account-form"> */}
        <form onSubmit={handleSubmit} method="POST">
          <h6>Create Account</h6>
          <div className="tog" onClick={() => closModel(false)}>
            <ImCross />
          </div>
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
          <br />
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
    // </div>
  );
}

export default Model;
