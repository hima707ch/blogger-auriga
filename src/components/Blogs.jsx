import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../redux/action";
import "./styles/blogs.css";

function Blogs() {
  // const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.blogs.blogs);
  console.log(posts);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((data) => setPosts(data));

    dispatch(fetchBlogs());
  }, []);

  const handleLike = (postId) => {
    const likes = JSON.parse(localStorage.getItem("likes") || "{}");
    likes[postId] = (likes[postId] || 0) + 1;
    localStorage.setItem("likes", JSON.stringify(likes));
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: likes[postId] } : post
      )
    );
  };

  return (
    <>
      <h1> Blogs </h1>
      <p> From Json placeholder.com </p>
      <div className="blog-container">
        {posts.map((post) => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => handleLike(post.id)}>
              Like ({post.likes || 0})
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blogs;
