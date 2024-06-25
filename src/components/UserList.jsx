import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListItem from "./ListItem";
import "./styles/user-list.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div className="user-list">
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment (demo of memo )
      </button>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <ListItem username={user.username} />
        ))}
      </ul>
    </div>
  );
}

export default UserList;
