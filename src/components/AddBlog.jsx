import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./styles/addBlog.css";

function AddBlog({ load }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const user = useSelector((state) => state.user.user);

  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userBlogs = user.blogs || [];

    user.blogs = [
      ...userBlogs,
      {
        title,
        description,
      },
    ];

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const ind = users.findIndex((u) => u.username == user.username);
    users[ind] = user;
    localStorage.setItem("users", JSON.stringify(users));

    load();

    setTitle("");
    setDescription("");
  };

  return (
    <form className="add-blog-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Post</button>
    </form>
  );
}

export default AddBlog;
