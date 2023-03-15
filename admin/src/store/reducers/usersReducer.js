import { USERS, USERS_LOADING } from "../actions/actionType";
import {} from "../actions/actionType";

const initialState = {
  users: [],
  usersLoading: true,
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
    default:
      return state;
  }
}
