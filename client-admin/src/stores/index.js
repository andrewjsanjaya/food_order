import { applyMiddleware, createStore } from "redux";
import logger from "./middlewares/logger";
import rootReducers from "./reducers/rootReducers";
import thunk from "redux-thunk";

let store = createStore(rootReducers, applyMiddleware(thunk, logger));

export default store;
