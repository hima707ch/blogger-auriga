import React, { useState } from "react";
import "./styles/register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (e.target.password.value.length < 6) {
      setError("Password must be of length 6");
      return;
    }

    console.log("Form data submitted:", formData);
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const username = e.target.username.value;

    const isExist = users.find((user) => user.username == username);

    if (isExist) {
      setError("USrname already exist");
      return;
    }
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
        <br />
        {error.length > 0 && error}
      </form>
    </div>
  );
}

export default Register;
