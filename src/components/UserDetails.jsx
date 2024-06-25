import React from "react";
import { useParams } from "react-router-dom";
import "./styles/userdetails.css";

function UserDetails() {
  const { username } = useParams();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.username == username);

  return (
    <>
      <div className="user-details">
        {user ? (
          <>
            <h2>{user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </>
        ) : (
          <p>User not found</p>
        )}
      </div>

      <div className="blog-container">
        {user?.blogs?.map((post) => (
          <div className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserDetails;
