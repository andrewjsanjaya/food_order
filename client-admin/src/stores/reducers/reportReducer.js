import { FETCH_REPORTS } from "../actions/actionType";

const initialState = {
  reports: [],
};

function reportReducer(state = initialState, action) {
  if (action.type === FETCH_REPORTS) {
    return {
      ...state,
      reports: action.payload,
    };
  } else {
    return state;
  }
}

export default reportReducer;
