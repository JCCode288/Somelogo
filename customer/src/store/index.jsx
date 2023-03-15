import { legacy_createStore as createStore } from "redux";

const initState = {
  products: [],
  categories: [],
  product: {},
  loadingProduct: false,
  loadingCategories: false,
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case "products/fetch":
      return {
        ...state,
        products: action.payload,
      };
    case "product/fetch":
      return {
        ...state,
        product: action.payload,
      };
    case "categories/fetch":
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
}
