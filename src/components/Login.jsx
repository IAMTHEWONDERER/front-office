import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import { loginUser } from "../auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate hook
  const loginStatus = useSelector((state) => state.auth.status);
  const loginError = useSelector((state) => state.auth.error);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => { // make handleSubmit async to use await
    e.preventDefault();
    try {
      const response = await dispatch(loginUser(formData));
      // Redirect to "/home" upon successful login
      if (response.payload) {
        navigate("/home"); // Use navigate function directly
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="pt-20">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" disabled={loginStatus === "loading"}>
          {loginStatus === "loading" ? "Logging in..." : "Login"}
        </button>
        {loginStatus === "failed" && <div>Error: {loginError}</div>}
      </form>
    </div>
  );
};

export default Login;
