import { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/action";
import "./styles/styles.css";

const Header = () => {
  const { isLogin } = useSelector((s) => s.user);
  const dispatch = useDispatch();

  console.log(isLogin);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">Blogger</Link>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/blogs"> Blogs </Link>
            </li>
            {isLogin && (
              <li>
                {" "}
                <Link to="/profile"> Profile </Link>
              </li>
            )}
            {!isLogin && (
              <li>
                <Link to="/login"> Login </Link>
              </li>
            )}
            {!isLogin && (
              <li>
                <Link to="/register">Register</Link>
              </li>
            )}
            <li>
              <Link to="/user-list">Users</Link>
            </li>
            {isLogin && (
              <li
                onClick={() => {
                  localStorage.setItem("loginUser", "");
                  dispatch(logout());
                }}
              >
                <Link to="/login">Logout</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
