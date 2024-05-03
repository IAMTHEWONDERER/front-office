// src/Register.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../auth/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const registrationStatus = useSelector((state) => state.auth.status);
  const registrationError = useSelector((state) => state.auth.error);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  return (
    <div className="mt-50">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="p-50 mt-50">
        <label>
          Username:
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" disabled={registrationStatus === "loading"}>
          {registrationStatus === "loading" ? "Registering..." : "Register"}
        </button>
        {registrationStatus === "failed" && (
          <div>Error: {registrationError}</div>
        )}
      </form>
    </div>
  );
};

export default Register;
