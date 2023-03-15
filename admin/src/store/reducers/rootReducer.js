import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  users: usersReducer,
  products: productsReducer,
  categories: categoriesReducer,
});
