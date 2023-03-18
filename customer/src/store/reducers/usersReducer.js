import {
  LOGGED_IN,
  REGISTER_LOADING,
  USERS_LOADING,
} from "../actions/actionType";
import {} from "../actions/actionType";

const initialState = {
  usersLoading: false,
  registerLoading: false,
  loggedIn: false,
};

export default function usersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGGED_IN:
      return {
        ...state,
        loggedIn: payload,
      };
    case USERS_LOADING:
      return {
        ...state,
        usersLoading: payload,
      };
    case REGISTER_LOADING:
      return {
        ...state,
        registerLoading: payload,
      };
    default:
      return state;
  }
}
