import { FETCH_TRANSACTIONS, DETAIL_TRANSACTION } from "../actions/actionType";

const initialState = {
  transactions: [],
  transaction: {},
};

function transactionReducer(state = initialState, action) {
  if (action.type === FETCH_TRANSACTIONS) {
    return {
      ...state,
      transactions: action.payload,
    };
  } else if (action.type === DETAIL_TRANSACTION) {
    return {
      ...state,
      transaction: action.payload,
    };
  } else {
    return state;
  }
}

export default transactionReducer;
