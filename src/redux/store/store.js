import { createStore, combineReducers } from "redux";
import reducers from "../reducer/reducers";

const store = createStore(combineReducers(reducers));

export default store;
