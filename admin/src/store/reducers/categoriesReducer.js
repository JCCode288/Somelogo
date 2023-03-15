import { CATEGORIES, CATEGORIES_LOADING } from "../actions/actionType";

const initialState = {
  categories: [],
  categoriesLoading: false,
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
    default:
      return state;
  }
}
