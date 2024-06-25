import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddBlog from "./AddBlog";

export default function Profile() {
  // const [username] = useState(localStorage.getItem("loginUser") || null);
  // const [users] = useState(JSON.parse(localStorage.getItem("users")) || []);
  // const [user] = useState(users.find((u) => u.username == username));

  const [myBlogs, setMyBlogs] = useState([]);
  const nav = useNavigate();

  const user = useSelector((state) => state.user.user);

  function handleDelete(index) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    let ind = users.findIndex((u) => u.username == user.username);
    let myblogs = users[ind].blogs.filter((blog, ind) => ind != index);

    users[ind].blogs = myblogs;

    localStorage.setItem("users", JSON.stringify(users));

    getMyBlogs();
  }

  function getMyBlogs() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const me = users.find((u) => u.username == user.username);
    setMyBlogs(me.blogs);
  }

  useEffect(() => {
    user && getMyBlogs();
  }, [user]);

  console.log(user);

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

      <AddBlog load={getMyBlogs} />

      <div className="blog-container">
        {myBlogs?.map((post, ind) => (
          <div
            className="blog-post"
            onClick={() => {
              nav("/blog/" + ind);
            }}
          >
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <button onClick={() => handleDelete(ind)}>DELETE</button>
          </div>
        ))}
      </div>
    </>
  );
}
