import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer, blogsReducer } from "./reducers";
import { thunk } from "redux-thunk";

const reducers = combineReducers({
  user: userReducer,
  blogs: blogsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
