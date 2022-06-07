import { FETCH_COMPANIES, DETAIL_COMPANY } from "../actions/actionType";

const initialState = {
  companies: [],
  company: {},
};

function companyReducer(state = initialState, action) {
  if (action.type === FETCH_COMPANIES) {
    return {
      ...state,
      companies: action.payload,
    };
  } else if (action.type === DETAIL_COMPANY) {
    return {
      ...state,
      company: action.payload,
    };
  } else {
    return state;
  }
}

export default companyReducer;
