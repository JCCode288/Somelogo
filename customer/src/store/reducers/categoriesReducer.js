import {
  CATEGORIES,
  CATEGORIES_LOADING,
  CATEGORY,
  CATEGORY_LOADING,
} from "../actions/actionType";

const initialState = {
  categories: [],
  categoriesLoading: false,
  category: {},
  categoryLoading: false,
};

export default function categoriesReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case CATEGORIES_LOADING:
      return {
        ...state,
        categoriesLoading: payload,
      };
    case CATEGORY:
      return {
        ...state,
        category: payload,
      };
    case CATEGORY_LOADING:
      return {
        ...state,
        categoryLoading: payload,
      };
    default:
      return state;
  }
}
