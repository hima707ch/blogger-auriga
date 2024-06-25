import axios from "axios";

const logout = () => {
  return {
    type: "LOGOUT",
  };
};

const login = (user) => {
  return {
    type: "LOGIN",
    payload: {
      user,
    },
  };
};

const fetchBlogs = () => {
  console.log("1");
  return async (dispatch) => {
    console.log(2);
    dispatch({ type: "FETCH_DATA_REQUEST" });
    console.log(3);
    try {
      console.log(5);
      const resp = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      console.log(resp);
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: resp.data });
    } catch (err) {
      dispatch({ type: "FETCH_DATA_FAILURE", error: err.message });
    }
  };
};

export { login, logout, fetchBlogs };
