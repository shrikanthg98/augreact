//a store file configures a store where you will store all state data

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CountReducer from "./reducers/CountReducer";
import TodoReducer from "./reducers/TodoReducer";

let combineReducersObject = combineReducers({
	count: CountReducer,
	todos: TodoReducer,
});

const store = createStore(combineReducersObject, applyMiddleware(thunk));

export default store;
