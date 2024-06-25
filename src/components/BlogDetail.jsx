import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  const me = useSelector((s) => s.user.user);

  //   for update
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    me.blogs[id] = {
      title,
      description,
    };

    const users = JSON.parse(localStorage.getItem("users")) || [];
    let ind = users.findIndex((u) => u.username == me.username);

    users[ind] = me;

    localStorage.setItem("users", JSON.stringify(users));
  };

  useEffect(() => {
    setBlog(me.blogs[id]);
  }, [me]);

  return (
    <>
      <div className="user-details">
        {me ? (
          <>
            <h2>{blog?.title}</h2>
            <p>{blog?.description} </p>
          </>
        ) : (
          <p>Some thing wrong </p>
        )}
      </div>

      <form className="add-blog-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          defaultValue={blog?.title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          defaultValue={blog?.description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Update Post</button>
      </form>
    </>
  );
}
