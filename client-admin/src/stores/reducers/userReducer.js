import { LOGIN_USER, CREATE_USER } from "../actions/actionType";

const initialState = {
  user: {},
  newUser: {},
};

function userReducer(state = initialState, action) {
  if (action.type === LOGIN_USER) {
    return {
      ...state,
      user: action.payload,
    };
  } else if (action.type === CREATE_USER) {
    return {
      ...state,
      newUser: action.payload,
    };
  } else {
    return state;
  }
}

export default userReducer;
