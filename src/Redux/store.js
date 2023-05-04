import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as productReducer } from "./BookReducer/reducer";

const rootReducer = combineReducers({authReducer,productReducer});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));