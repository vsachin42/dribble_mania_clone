import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
// import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as ProductReducer } from "./Redux/ProductReducer/reducer";

const rootReducer = combineReducers({ProductReducer});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
