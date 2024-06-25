import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/action";
import "./styles/login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const inputRef = useRef();
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (e.target.password.value.length < 6) {
      setError("Password must be of length 6");
    }

    const username = e.target.username.value;
    const password = e.target.password.value;

    console.log("line 19", username, password);

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const isExist = users.find(
      (user) => user.username == username && user.password == password
    );

    if (isExist) {
      localStorage.setItem("loginUser", username);
      dispatch(login(isExist)); //isExist is user here

      nav("/profile");
    } else {
      setError("Invalid username or password");
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={inputRef}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
        {error.length > 0 && error}
      </form>
    </div>
  );
}

export default Login;
