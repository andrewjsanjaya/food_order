import { FETCH_ITEMS, DETAIL_ITEM } from "../actions/actionType";

const initialState = {
  items: [],
  item: {},
};

function itemReducer(state = initialState, action) {
  if (action.type === FETCH_ITEMS) {
    return {
      ...state,
      items: action.payload,
    };
  } else if (action.type === DETAIL_ITEM) {
    return {
      ...state,
      item: action.payload,
    };
  } else {
    return state;
  }
}

export default itemReducer;
