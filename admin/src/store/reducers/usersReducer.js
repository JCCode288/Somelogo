import { REGISTER_LOADING, LOGIN_LOADING } from "../actions/actionType";
import {} from "../actions/actionType";

const initialState = {
  usersLoading: false,
  registerLoading: false,
};

export default function usersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_LOADING:
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
