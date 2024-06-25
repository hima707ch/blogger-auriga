function initilUserState() {
  const username = localStorage.getItem("loginUser") || null;
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.username == username);

  if (user) {
    return {
      user,
      isLogin: true,
    };
  }

  return {
    user: null,
    isLogin: false,
  };
}

const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

const initialBlogState = {
  blogs: [],
  loading: false,
  error: null,
};

const userReducer = (state = initilUserState(), action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: true,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
        user: null,
      };
    default:
      return state;
  }
};

const blogsReducer = (state = initialBlogState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, blogs: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export { userReducer, blogsReducer };
