import { combineReducers } from "redux";
import companyReducer from "./companyReducer";
import itemReducer from "./itemReducer";
import reportReducer from "./reportReducer";
import transactionReducer from "./transactionReducer";
import userReducer from "./userReducer";

const rootReducers = combineReducers({
  company: companyReducer,
  item: itemReducer,
  user: userReducer,
  transaction: transactionReducer,
  report: reportReducer,
});

export default rootReducers;
