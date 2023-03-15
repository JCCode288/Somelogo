import { REGISTER_LOADING, USERS, USERS_LOADING } from "../actions/actionType";
import {} from "../actions/actionType";

const initialState = {
  users: [],
  usersLoading: false,
  registerLoading: false,
};

export default function usersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case USERS:
      return {
        ...state,
        users: payload,
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
